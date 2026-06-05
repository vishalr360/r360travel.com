#!/bin/bash
# ==========================================
# Tripsure — Deployment Script
# Polaris Commerce Pvt. Ltd.
# ==========================================
set -e

# ── Configuration ──────────────────────────────────────────────
AWS_REGION="ap-south-1"
AWS_ACCOUNT_ID="${AWS_ACCOUNT_ID:-YOUR_AWS_ACCOUNT_ID}"   # override via env var
ECR_REPO_NAME="tripsure"
IMAGE_TAG="${IMAGE_TAG:-$(git rev-parse --short HEAD 2>/dev/null || echo latest)}"

ECR_REGISTRY="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
ECR_IMAGE="${ECR_REGISTRY}/${ECR_REPO_NAME}:${IMAGE_TAG}"
ECR_IMAGE_LATEST="${ECR_REGISTRY}/${ECR_REPO_NAME}:latest"

# ── Colours ────────────────────────────────────────────────────
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
step()    { echo -e "${GREEN}==>${NC} $1"; }
warn()    { echo -e "${YELLOW}WARN:${NC} $1"; }
die()     { echo -e "${RED}ERROR:${NC} $1"; exit 1; }

# ── Helpers ────────────────────────────────────────────────────
build_image() {
  step "Building Docker image (tag: ${IMAGE_TAG})..."
  docker build \
    --platform linux/amd64 \
    -t "${ECR_REPO_NAME}:${IMAGE_TAG}" \
    -t "${ECR_REPO_NAME}:latest" \
    .
  step "Build complete — local image: ${ECR_REPO_NAME}:${IMAGE_TAG}"
}

# ==========================================
# Option 1: AWS ECR
# ==========================================
deploy_ecr() {
  [ "$AWS_ACCOUNT_ID" = "YOUR_AWS_ACCOUNT_ID" ] && die "Set AWS_ACCOUNT_ID first:\n  export AWS_ACCOUNT_ID=123456789012"
  command -v aws >/dev/null 2>&1 || die "AWS CLI not installed"

  build_image

  step "Logging into AWS ECR (${AWS_REGION})..."
  aws ecr get-login-password --region "${AWS_REGION}" \
    | docker login --username AWS --password-stdin "${ECR_REGISTRY}"

  step "Ensuring ECR repository exists..."
  aws ecr describe-repositories --repository-names "${ECR_REPO_NAME}" --region "${AWS_REGION}" >/dev/null 2>&1 \
    || aws ecr create-repository --repository-name "${ECR_REPO_NAME}" --region "${AWS_REGION}" >/dev/null

  step "Pushing ${ECR_IMAGE}..."
  docker tag "${ECR_REPO_NAME}:${IMAGE_TAG}" "${ECR_IMAGE}"
  docker tag "${ECR_REPO_NAME}:latest"       "${ECR_IMAGE_LATEST}"
  docker push "${ECR_IMAGE}"
  docker push "${ECR_IMAGE_LATEST}"

  step "Done! Deploy on EC2 with:"
  echo ""
  echo "  aws ecr get-login-password --region ${AWS_REGION} \\"
  echo "    | docker login --username AWS --password-stdin ${ECR_REGISTRY}"
  echo ""
  echo "  docker pull ${ECR_IMAGE_LATEST}"
  echo "  docker stop tripsure-app 2>/dev/null || true"
  echo "  docker rm   tripsure-app 2>/dev/null || true"
  echo "  docker run -d --name tripsure-app -p 80:3000 \\"
  echo "    --restart unless-stopped ${ECR_IMAGE_LATEST}"
}

# ==========================================
# Option 2: Docker Hub
# ==========================================
deploy_dockerhub() {
  DOCKERHUB_USER="${1:?Usage: ./deploy.sh dockerhub <username>}"
  HUB_IMAGE="${DOCKERHUB_USER}/${ECR_REPO_NAME}:${IMAGE_TAG}"
  HUB_LATEST="${DOCKERHUB_USER}/${ECR_REPO_NAME}:latest"

  build_image

  step "Pushing to Docker Hub as ${HUB_IMAGE}..."
  docker tag "${ECR_REPO_NAME}:${IMAGE_TAG}" "${HUB_IMAGE}"
  docker tag "${ECR_REPO_NAME}:latest"       "${HUB_LATEST}"
  docker push "${HUB_IMAGE}"
  docker push "${HUB_LATEST}"

  step "Done! Deploy on EC2 with:"
  echo ""
  echo "  docker pull ${HUB_LATEST}"
  echo "  docker stop tripsure-app 2>/dev/null || true"
  echo "  docker rm   tripsure-app 2>/dev/null || true"
  echo "  docker run -d --name tripsure-app -p 80:3000 \\"
  echo "    --restart unless-stopped ${HUB_LATEST}"
}

# ==========================================
# Option 3: tar.gz (manual transfer)
# ==========================================
build_tar() {
  build_image
  step "Saving image to tripsure-${IMAGE_TAG}.tar.gz..."
  docker save "${ECR_REPO_NAME}:${IMAGE_TAG}" | gzip > "tripsure-${IMAGE_TAG}.tar.gz"
  step "Saved: tripsure-${IMAGE_TAG}.tar.gz ($(du -sh "tripsure-${IMAGE_TAG}.tar.gz" | cut -f1))"
  echo ""
  echo "  scp tripsure-${IMAGE_TAG}.tar.gz user@your-server:~/"
  echo "  ssh user@your-server"
  echo "  gunzip -c ~/tripsure-${IMAGE_TAG}.tar.gz | docker load"
  echo "  docker stop tripsure-app 2>/dev/null || true"
  echo "  docker rm   tripsure-app 2>/dev/null || true"
  echo "  docker run -d --name tripsure-app -p 80:3000 \\"
  echo "    --restart unless-stopped ${ECR_REPO_NAME}:${IMAGE_TAG}"
}

# ==========================================
# Option 4: docker-compose up (server)
# ==========================================
deploy_compose() {
  step "Pulling latest image and restarting via docker-compose..."
  docker compose pull tripsure 2>/dev/null || docker-compose pull tripsure
  docker compose up -d --remove-orphans 2>/dev/null || docker-compose up -d --remove-orphans
  step "Deployment complete."
  docker ps --filter "name=tripsure"
}

# ==========================================
# Option 5: Local test only
# ==========================================
build_local() {
  build_image
  echo ""
  step "Run locally:"
  echo "  docker run -p 3000:3000 ${ECR_REPO_NAME}:latest"
  echo ""
  step "Or with docker-compose:"
  echo "  docker compose up"
}

# ==========================================
# Help
# ==========================================
show_help() {
  echo "Tripsure Deployment Script"
  echo ""
  echo "Usage: ./deploy.sh <command> [args]"
  echo ""
  echo "Commands:"
  echo "  ecr              Build and push to AWS ECR"
  echo "                   Requires: AWS_ACCOUNT_ID env var"
  echo "  dockerhub <user> Build and push to Docker Hub"
  echo "  tar              Build and save as tripsure-<sha>.tar.gz"
  echo "  compose          docker-compose pull + up -d (on server)"
  echo "  build            Build image locally only"
  echo "  help             Show this message"
  echo ""
  echo "Environment variables:"
  echo "  AWS_ACCOUNT_ID   Your 12-digit AWS account ID"
  echo "  IMAGE_TAG        Override tag (default: git short SHA)"
  echo ""
}

case "${1:-help}" in
  ecr)        deploy_ecr       ;;
  dockerhub)  deploy_dockerhub "${2}" ;;
  tar)        build_tar        ;;
  compose)    deploy_compose   ;;
  build)      build_local      ;;
  help|--help|-h) show_help    ;;
  *)          show_help        ;;
esac
