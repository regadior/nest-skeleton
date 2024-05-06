# syntax=docker/dockerfile:1.6-labs

ARG NODE_VERSION=20.11.1

FROM node:${NODE_VERSION}-alpine as base

ARG WAIT_VERSION=2.12.1

RUN set -ex \
  && apk update \
  && apk upgrade \
  && apk add --no-cache openssl \
  && apk cache clean \
  && npm install -g pm2 \
  && npm cache clean --force

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/${WAIT_VERSION}/wait /wait
RUN chmod +x /wait

WORKDIR /app


FROM base as builder
RUN mkdir logs
COPY --link package*.json ./

RUN npm ci --omit=optional \
  && npm cache clean --force

COPY --link . .

RUN npm run prisma:generate \
  && npm run build \
  && npm prune --production

FROM base as prod
ENV TARGET_ENV=prod
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app
COPY --from=builder /app/logs /logs

COPY --link <<EOF process.json
{ "apps": [{ "exec_mode": "cluster", "instances": "max", "name": "nest-skeleton", "script": "./main.js" }] }
EOF

CMD /wait && pm2-runtime ./process.json