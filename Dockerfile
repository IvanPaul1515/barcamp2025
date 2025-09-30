FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY astro.config.mjs ./

RUN corepack enable pnpm
RUN pnpm install

COPY src ./src
COPY public ./public

RUN pnpm run build

FROM node:22-alpine

WORKDIR /app
RUN corepack enable pnpm

COPY --from=builder /app .

RUN pnpm install

EXPOSE 4321

CMD ["pnpm", "run", "preview", "--host", "0.0.0.0"]