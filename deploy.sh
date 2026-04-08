#!/bin/bash

# deploy.sh
# Deployment script for Pulling from GHCR and restarting docker-compose services.
# Usage: ./deploy.sh
# Before you can run this, ensure you are logged into GHCR:
# echo $CR_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin

set -e

echo "Starting deployment process..."

echo "Pulling latest image..."
docker pull ghcr.io/optimotechet/landing-page/landing:latest

echo "Stopping containers..."
docker compose down

echo "Starting containers..."
docker compose up -d

echo "Pruning dangling images..."
docker image prune -f

echo "Deployment completed successfully! ✅"
