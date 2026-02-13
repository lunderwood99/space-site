# Multi-stage build for frontend
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy root files
COPY package.json turbo.json ./
# Copy workspace package.json files
COPY admin-portal/package.json ./admin-portal/
COPY frontend/package.json ./frontend/

# Install dependencies
RUN yarn install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build frontend
RUN cd frontend && yarn build

# Ensure public dir exists (Next.js may not create it if empty)
RUN mkdir -p /app/frontend/public

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application (public may be empty)
COPY --from=builder /app/frontend/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/frontend/.next/static ./.next/static

# In a monorepo, standalone may rely on root node_modules (e.g. for 'next')
# Copy root node_modules so required modules resolve at runtime
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
