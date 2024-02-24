# syntax=docker/dockerfile:1.6-labs

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-buster-slim as base

ARG WAIT_VERSION=2.12.1

RUN <<EOF
set -ex
apt-get update
apt-get upgrade -y
apt-get install -y openssl
apt-get autoremove -y
apt-get clean -y
rm -rf /var/lib/apt/lists/*
npm install -g pm2
npm install -g @nestjs/cli
npm cache clean --force
EOF

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/${WAIT_VERSION}/wait /wait
RUN chmod +x /wait

WORKDIR /app


FROM base as builder

COPY --link package*.json ./

RUN <<EOF
npm ci --omit=optional
npm cache clean --force
EOF

COPY --link . .

RUN <<EOF
npm run prisma:generate
npm run build
npm prune --production
EOF

FROM base as prod
ENV NODE_ENV=production
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app

COPY --link <<EOF process.json
{ "apps": [{ "exec_mode": "cluster", "instances": "max", "name": "nest-skeleton", "script": "./main.js" }] }
EOF

CMD /wait && pm2-runtime ./process.json