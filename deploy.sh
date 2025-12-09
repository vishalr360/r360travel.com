#!/bin/bash

# ==========================================
# R360Travel - Deployment Script
# ==========================================

set -e

# Configuration - UPDATE THESE VALUES
AWS_REGION="ap-south-1"                    # Change to your AWS region
AWS_ACCOUNT_ID="YOUR_AWS_ACCOUNT_ID"       # Your AWS account ID
ECR_REPO_NAME="r360travel"                 # ECR repository name
IMAGE_TAG="latest"                         # or use git commit hash: $(git rev-parse --short HEAD)

# Derived variables
ECR_REGISTRY="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
ECR_IMAGE="${ECR_REGISTRY}/${ECR_REPO_NAME}:${IMAGE_TAG}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_step() {
    echo -e "${GREEN}==>${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}WARNING:${NC} $1"
}

print_error() {
    echo -e "${RED}ERROR:${NC} $1"
}

# ==========================================
# Option 1: Deploy using AWS ECR
# ==========================================
deploy_ecr() {
    print_step "Building Docker image..."
    docker build -t ${ECR_REPO_NAME}:${IMAGE_TAG} .

    print_step "Logging into AWS ECR..."
    aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}

    print_step "Tagging image for ECR..."
    docker tag ${ECR_REPO_NAME}:${IMAGE_TAG} ${ECR_IMAGE}

    print_step "Pushing image to ECR..."
    docker push ${ECR_IMAGE}

    print_step "Image pushed successfully!"
    echo ""
    echo "To deploy on EC2, run these commands on your EC2 instance:"
    echo ""
    echo "  # Login to ECR"
    echo "  aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}"
    echo ""
    echo "  # Pull and run the image"
    echo "  docker pull ${ECR_IMAGE}"
    echo "  docker stop r360travel-app 2>/dev/null || true"
    echo "  docker rm r360travel-app 2>/dev/null || true"
    echo "  docker run -d --name r360travel-app -p 80:3000 --restart unless-stopped ${ECR_IMAGE}"
}

# ==========================================
# Option 2: Deploy using Docker Hub
# ==========================================
deploy_dockerhub() {
    DOCKERHUB_USERNAME="${1:-YOUR_DOCKERHUB_USERNAME}"
    DOCKERHUB_IMAGE="${DOCKERHUB_USERNAME}/${ECR_REPO_NAME}:${IMAGE_TAG}"

    print_step "Building Docker image..."
    docker build -t ${ECR_REPO_NAME}:${IMAGE_TAG} .

    print_step "Tagging image for Docker Hub..."
    docker tag ${ECR_REPO_NAME}:${IMAGE_TAG} ${DOCKERHUB_IMAGE}

    print_step "Pushing image to Docker Hub..."
    docker push ${DOCKERHUB_IMAGE}

    print_step "Image pushed successfully!"
    echo ""
    echo "To deploy on EC2, run these commands on your EC2 instance:"
    echo ""
    echo "  docker pull ${DOCKERHUB_IMAGE}"
    echo "  docker stop r360travel-app 2>/dev/null || true"
    echo "  docker rm r360travel-app 2>/dev/null || true"
    echo "  docker run -d --name r360travel-app -p 80:3000 --restart unless-stopped ${DOCKERHUB_IMAGE}"
}

# ==========================================
# Option 3: Build and save as tar (for manual transfer)
# ==========================================
build_tar() {
    print_step "Building Docker image..."
    docker build -t ${ECR_REPO_NAME}:${IMAGE_TAG} .

    print_step "Saving image as tar file..."
    docker save ${ECR_REPO_NAME}:${IMAGE_TAG} | gzip > r360travel-image.tar.gz

    print_step "Image saved as r360travel-image.tar.gz"
    echo ""
    echo "Transfer this file to your EC2 instance and run:"
    echo ""
    echo "  # Load the image"
    echo "  gunzip -c r360travel-image.tar.gz | docker load"
    echo ""
    echo "  # Run the container"
    echo "  docker stop r360travel-app 2>/dev/null || true"
    echo "  docker rm r360travel-app 2>/dev/null || true"
    echo "  docker run -d --name r360travel-app -p 80:3000 --restart unless-stopped ${ECR_REPO_NAME}:${IMAGE_TAG}"
}

# ==========================================
# Option 4: Build only (for local testing)
# ==========================================
build_local() {
    print_step "Building Docker image..."
    docker build -t ${ECR_REPO_NAME}:${IMAGE_TAG} .

    print_step "Build complete!"
    echo ""
    echo "To run locally:"
    echo "  docker run -p 3000:3000 ${ECR_REPO_NAME}:${IMAGE_TAG}"
    echo ""
    echo "Or use docker-compose:"
    echo "  docker-compose up -d"
}

# ==========================================
# Main
# ==========================================
show_help() {
    echo "R360Travel Deployment Script"
    echo ""
    echo "Usage: ./deploy.sh [command]"
    echo ""
    echo "Commands:"
    echo "  ecr              Build and push to AWS ECR"
    echo "  dockerhub [user] Build and push to Docker Hub"
    echo "  tar              Build and save as tar.gz file"
    echo "  build            Build image locally only"
    echo "  help             Show this help message"
    echo ""
}

case "${1}" in
    ecr)
        deploy_ecr
        ;;
    dockerhub)
        deploy_dockerhub "${2}"
        ;;
    tar)
        build_tar
        ;;
    build)
        build_local
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        show_help
        ;;
esac
