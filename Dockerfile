# Etapa de build
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar archivos de configuración y dependencias
COPY package*.json ./
COPY tsconfig.json ./
COPY astro.config.mjs ./

RUN corepack enable pnpm
RUN pnpm install --no-frozen-lockfile

# Copiar código fuente
COPY src ./src
COPY public ./public

# Construir el proyecto
RUN pnpm run build

# Etapa de producción con Nginx
FROM nginx:alpine AS runner

# Copiar el build al directorio por defecto de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
