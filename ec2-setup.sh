#!/bin/bash

# ==========================================
# R360Travel - EC2 Instance Setup Script
# Run this on a fresh Amazon Linux 2023 or Ubuntu EC2 instance
# ==========================================

set -e

# Colors for output
GREEN='\033[0;32m'
NC='\033[0m'

print_step() {
    echo -e "${GREEN}==>${NC} $1"
}

# Detect OS
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$NAME
fi

print_step "Detected OS: $OS"

# ==========================================
# Install Docker
# ==========================================
install_docker_amazon_linux() {
    print_step "Installing Docker on Amazon Linux..."
    sudo yum update -y
    sudo yum install -y docker
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo usermod -a -G docker ec2-user
}

install_docker_ubuntu() {
    print_step "Installing Docker on Ubuntu..."
    sudo apt-get update
    sudo apt-get install -y ca-certificates curl gnupg
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg

    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    sudo usermod -a -G docker ubuntu
}

# Install based on OS
case "$OS" in
    *"Amazon Linux"*)
        install_docker_amazon_linux
        ;;
    *"Ubuntu"*)
        install_docker_ubuntu
        ;;
    *)
        echo "Unsupported OS. Please install Docker manually."
        exit 1
        ;;
esac

# ==========================================
# Install Docker Compose (standalone)
# ==========================================
print_step "Installing Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# ==========================================
# Install AWS CLI (for ECR access)
# ==========================================
print_step "Installing AWS CLI..."
if ! command -v aws &> /dev/null; then
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    unzip awscliv2.zip
    sudo ./aws/install
    rm -rf aws awscliv2.zip
fi

# ==========================================
# Configure firewall (if using UFW on Ubuntu)
# ==========================================
if command -v ufw &> /dev/null; then
    print_step "Configuring firewall..."
    sudo ufw allow 80/tcp
    sudo ufw allow 443/tcp
    sudo ufw allow 22/tcp
fi

# ==========================================
# Create app directory
# ==========================================
print_step "Creating application directory..."
sudo mkdir -p /opt/r360travel
sudo chown $(whoami):$(whoami) /opt/r360travel

# ==========================================
# Print completion message
# ==========================================
echo ""
echo "=========================================="
echo "EC2 Setup Complete!"
echo "=========================================="
echo ""
echo "IMPORTANT: Log out and log back in for Docker group changes to take effect."
echo ""
echo "Next steps:"
echo ""
echo "1. Configure AWS credentials (if using ECR):"
echo "   aws configure"
echo ""
echo "2. Pull and run your Docker image:"
echo ""
echo "   # Option A: From ECR"
echo "   aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com"
echo "   docker pull YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/r360travel:latest"
echo "   docker run -d --name r360travel-app -p 80:3000 --restart unless-stopped YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/r360travel:latest"
echo ""
echo "   # Option B: From Docker Hub"
echo "   docker pull your-username/r360travel:latest"
echo "   docker run -d --name r360travel-app -p 80:3000 --restart unless-stopped your-username/r360travel:latest"
echo ""
echo "   # Option C: From tar file (after SCP transfer)"
echo "   gunzip -c r360travel-image.tar.gz | docker load"
echo "   docker run -d --name r360travel-app -p 80:3000 --restart unless-stopped r360travel:latest"
echo ""
echo "3. Verify the app is running:"
echo "   docker ps"
echo "   curl http://localhost"
echo ""
