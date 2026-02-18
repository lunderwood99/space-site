# Deployment Guide

This guide explains how to deploy the frontend and admin-portal applications using Turbo and Docker.

## Prerequisites

- Docker and Docker Compose installed
- Yarn package manager
- MongoDB (or use the included Docker Compose setup)

## Architecture

Both applications connect to the same MongoDB database:

- **Frontend**: Next.js app running on port 3000
- **Admin Portal**: Next.js app running on port 3001
- **MongoDB**: Database service on port 27017

## Local Development

### Using Docker Compose (Development)

```bash
# Start MongoDB only
cd admin-portal
docker-compose up -d

# In separate terminals, run the apps with Turbo
yarn dev
```

### Using Turbo Directly

```bash
# Install dependencies
yarn install

# Run both apps in development mode
yarn dev

# Build both apps
yarn build

# Start both apps in production mode
yarn start
```

## Production Deployment

### Option 1: Docker Compose (Recommended)

Deploy all services together using Docker Compose:

```bash
# Build and start all services
docker-compose -f docker-compose.yaml up -d --build

# View logs
docker-compose -f docker-compose.yaml logs -f

# Stop services
docker-compose -f docker-compose.yaml down

# Stop and remove volumes (⚠️ deletes data)
docker-compose -f docker-compose.yaml down -v
```

The services will be available at:

- Frontend: http://localhost:3000
- Admin Portal: http://localhost:3001
- MongoDB: localhost:27017

### Option 2: Individual Docker Containers

Build and run each service individually:

```bash
# Build frontend
docker build -f frontend/Dockerfile -t space-site-frontend .

# Build admin-portal
docker build -f admin-portal/Dockerfile -t space-site-admin .

# Run MongoDB
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  mongo:4.4.18

# Run frontend
docker run -d \
  --name frontend \
  -p 3000:3000 \
  -e MONGODB_URI=mongodb://mongodb:27017/moonshake \
  --link mongodb:mongodb \
  space-site-frontend

# Run admin-portal
docker run -d \
  --name admin-portal \
  -p 3001:3001 \
  -e MONGODB_URI=mongodb://mongodb:27017/moonshake \
  --link mongodb:mongodb \
  space-site-admin
```

### Option 3: Using External MongoDB (MongoDB Atlas)

If using MongoDB Atlas or another external MongoDB instance:

1. Update the `MONGODB_URI` environment variable in `docker-compose.prod.yaml`:

   ```yaml
   environment:
     - MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/moonshake
   ```

2. Remove the MongoDB service from `docker-compose.prod.yaml` if not needed locally

3. Deploy:
   ```bash
   docker-compose -f docker-compose.prod.yaml up -d --build
   ```

## Environment Variables

Create a `.env` file in the root directory (or set environment variables):

```bash
MONGODB_URI=mongodb://mongodb:27017/moonshake
PORT=3000
ADMIN_PORT=3001
```

For production, set these as environment variables in your deployment platform.

## Turbo Commands

The root `package.json` includes Turbo commands:

- `yarn build` - Build all apps
- `yarn dev` - Run all apps in development mode
- `yarn start` - Start all apps in production mode
- `yarn lint` - Lint all apps
- `yarn check-types` - Type check all apps

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running and accessible
- Check the `MONGODB_URI` environment variable
- For Docker, ensure services are on the same network
- Verify MongoDB health check passes: `docker-compose -f docker-compose.prod.yaml ps`

### Build Failures

- Clear Turbo cache: `rm -rf .turbo`
- Clear node_modules: `rm -rf node_modules */node_modules && yarn install`
- Check Next.js standalone output is enabled in `next.config.js`

### Port Conflicts

- Change ports in `docker-compose.prod.yaml` if 3000, 3001, or 27017 are in use
- Update environment variables accordingly

## Production Considerations

1. **Security**: Use strong MongoDB credentials and restrict network access
2. **SSL/TLS**: Set up reverse proxy (nginx/traefik) for HTTPS
3. **Monitoring**: Add health checks and monitoring
4. **Backups**: Set up regular MongoDB backups
5. **Scaling**: Consider using managed MongoDB (Atlas) for production
6. **Environment Variables**: Use secrets management (Docker secrets, Kubernetes secrets, etc.)
