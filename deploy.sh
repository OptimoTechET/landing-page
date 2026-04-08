#!/bin/bash

# deploy.sh
# Deployment script for Pulling from GHCR and restarting docker-compose services.
# Usage: ./deploy.sh
# Before you can run this, ensure you are logged into GHCR:
# echo $CR_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin

set -e

echo "Starting deployment process..."

# Pull the latest image
echo "Pulling latest image..."
docker pull ghcr.io/optimotechet/landing-page/landing:latest

# Recreate and start the container
echo "Recreating and starting the container..."
docker compose up -d landing

# Prune unused images to reclaim disk space
echo "Pruning dangling images..."
docker image prune -a -f --filter "until=24h"

echo "Deployment completed successfully!"
