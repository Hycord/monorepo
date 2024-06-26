FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
 
FROM base AS builder
RUN corepack enable
# Set working directory
WORKDIR /app
RUN pnpm i -g turbo@1.12.5
COPY . .
RUN turbo prune api --docker
 
# Add lockfile and package.json's of isolated subworkspace
FROM builder AS installer
WORKDIR /app
 
# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install
 
# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm build --filter api
 
FROM installer AS runner
WORKDIR /app
 
# COPY --from=installer /app/apps/api/package.json .
# COPY --from=installer /app/apps/web/package.json .
COPY --from=installer /app .
 
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
# COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
# COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public


EXPOSE 3000
ENV ADDRESS=0.0.0.0 PORT=3000
ENV FASTIFY_ADDRESS = 0.0.0.0

CMD node /app/apps/api/dist/index.js