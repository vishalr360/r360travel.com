#!/bin/bash
# ==========================================
# Tripsure — EC2 Instance Setup Script
# Run once on a fresh Amazon Linux 2023 or Ubuntu server
# ==========================================
set -e

GREEN='\033[0;32m'; NC='\033[0m'
step() { echo -e "${GREEN}==>${NC} $1"; }

[ -f /etc/os-release ] && . /etc/os-release && OS=$NAME
step "OS detected: ${OS:-unknown}"

# ── Docker ─────────────────────────────────────────────────────
install_docker_amazon() {
  step "Installing Docker (Amazon Linux)..."
  sudo yum update -y
  sudo yum install -y docker
  sudo systemctl start docker
  sudo systemctl enable docker
  sudo usermod -aG docker ec2-user
}

install_docker_ubuntu() {
  step "Installing Docker (Ubuntu)..."
  sudo apt-get update -y
  sudo apt-get install -y ca-certificates curl gnupg
  sudo install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
    | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  sudo chmod a+r /etc/apt/keyrings/docker.gpg
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
    https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) stable" \
    | sudo tee /etc/apt/sources.list.d/docker.list >/dev/null
  sudo apt-get update -y
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
  sudo usermod -aG docker ubuntu
}

case "$OS" in
  *"Amazon Linux"*) install_docker_amazon ;;
  *"Ubuntu"*)       install_docker_ubuntu ;;
  *) echo "Unsupported OS — install Docker manually"; exit 1 ;;
esac

# ── Docker Compose standalone ──────────────────────────────────
step "Installing Docker Compose CLI plugin..."
COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep '"tag_name"' | cut -d'"' -f4)
sudo curl -SL "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" \
  -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# ── AWS CLI ────────────────────────────────────────────────────
if ! command -v aws &>/dev/null; then
  step "Installing AWS CLI..."
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o /tmp/awscliv2.zip
  unzip -q /tmp/awscliv2.zip -d /tmp
  sudo /tmp/aws/install
  rm -rf /tmp/awscliv2.zip /tmp/aws
fi

# ── Firewall ───────────────────────────────────────────────────
if command -v ufw &>/dev/null; then
  step "Opening ports 22, 80, 443..."
  sudo ufw allow 22/tcp
  sudo ufw allow 80/tcp
  sudo ufw allow 443/tcp
fi

# ── App directory ──────────────────────────────────────────────
step "Creating /opt/tripsure..."
sudo mkdir -p /opt/tripsure
sudo chown "$(whoami):$(whoami)" /opt/tripsure

# ── Done ───────────────────────────────────────────────────────
echo ""
echo "=========================================="
echo "  EC2 Setup Complete!"
echo "=========================================="
echo ""
echo "IMPORTANT: Log out and back in so Docker group change takes effect."
echo ""
echo "Next steps:"
echo ""
echo "  1. Configure AWS credentials (for ECR):"
echo "     aws configure"
echo ""
echo "  2a. Deploy from ECR:"
echo "     export AWS_ACCOUNT_ID=123456789012"
echo "     aws ecr get-login-password --region ap-south-1 \\"
echo "       | docker login --username AWS --password-stdin \${AWS_ACCOUNT_ID}.dkr.ecr.ap-south-1.amazonaws.com"
echo "     docker pull \${AWS_ACCOUNT_ID}.dkr.ecr.ap-south-1.amazonaws.com/tripsure:latest"
echo "     docker run -d --name tripsure-app -p 80:3000 --restart unless-stopped \\"
echo "       \${AWS_ACCOUNT_ID}.dkr.ecr.ap-south-1.amazonaws.com/tripsure:latest"
echo ""
echo "  2b. Deploy from tar (after SCP):"
echo "     gunzip -c tripsure-*.tar.gz | docker load"
echo "     docker run -d --name tripsure-app -p 80:3000 --restart unless-stopped tripsure:latest"
echo ""
echo "  3. Verify:"
echo "     docker ps"
echo "     curl http://localhost"
echo ""
