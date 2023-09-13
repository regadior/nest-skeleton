FROM node:18-slim as node

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

RUN apt-get update
RUN apt-get install -y openssl

RUN npm i npm@latest -g

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

# Builder stage
FROM node AS builder

WORKDIR /code
COPY package*.json ./
COPY ./src/infrastructure/common/persistence/prisma/schema.prisma ./prisma/schema.prisma

RUN npm install --omit=optional --ignore-scripts && npm cache clean --force
RUN npx -y prisma generate --schema ./prisma/schema.prisma

ENV PATH /code/node_modules/.bin:$PATH
WORKDIR /code/app
COPY . ./
RUN npm run build

# Dev stage
FROM builder as dev
ENV NODE_ENV=development
ENV FORCE_COLOR=1
CMD /wait && npm run start:dev

