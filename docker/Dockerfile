# syntax=docker/dockerfile:1.6-labs
ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-buster-slim as base

ARG WAIT_VERSION=2.12.1

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y openssl && \
    apt-get autoremove -y && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/* && \
    npm install -g pm2 && \
    npm cache clean --force

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/${WAIT_VERSION}/wait /wait
RUN chmod +x /wait

WORKDIR /app

FROM base as builder

COPY package*.json ./

RUN npm ci --omit=optional && \
    npm cache clean --force

COPY . .

RUN npm run prisma:generate && \
    npm run build && \
    npm prune --production

FROM base as dev
EXPOSE 3000

CMD /wait && npm run start:dev
