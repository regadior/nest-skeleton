ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim as base
ENV PORT $PORT
EXPOSE $PORT

RUN set -ex \
  && apt-get update \
  && apt-get upgrade -y \
  && apt-get install -y openssl \
  && apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/* \
  && npm i npm@latest -g \
  && npm cache clean --force

ARG WAIT_VERSION=2.12.1

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/${WAIT_VERSION}/wait /wait
RUN chmod +x /wait

# Builder stage
FROM base as builder
WORKDIR /code
COPY package*.json ./
COPY ./src/infrastructure/common/persistence/prisma/schema.prisma ./prisma/schema.prisma
RUN npx -y prisma generate --schema ./prisma/schema.prisma
WORKDIR /code/app
COPY . ./
# Dev stage
FROM builder as dev
ENV NODE_ENV=development
ENV FORCE_COLOR=1
CMD /wait && npm run start:dev
