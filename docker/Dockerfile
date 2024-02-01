FROM node:20-slim as node
EXPOSE 3000

RUN apt-get update
RUN apt-get install -y openssl
RUN npm i npm@latest -g

# RUN apt-get update && \
#     apt-get install -y openssl && \
#     npm i npm@latest -g && \
#     rm -rf /var/lib/apt/lists/*

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.12.1/wait /wait
RUN chmod +x /wait

# Builder stage
FROM node AS builder

WORKDIR /code
COPY package*.json ./
COPY ./src/infrastructure/common/persistence/prisma/schema.prisma ./prisma/schema.prisma


RUN npm install --omit=optional --ignore-scripts && npm cache clean --force
RUN npx -y prisma generate --schema ./prisma/schema.prisma
# RUN npm install --omit=optional --ignore-scripts \
#     && npm cache clean --force \
#     && npx -y prisma generate --schema ./prisma/schema.prisma

ENV PATH /code/node_modules/.bin:$PATH
WORKDIR /code/app
COPY . ./
RUN npm run build

# Dev stage
FROM builder as dev
ENV NODE_ENV=development
ENV FORCE_COLOR=1
CMD /wait -- npm run start:dev

