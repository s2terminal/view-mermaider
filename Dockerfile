FROM node:13.8.0-alpine3.10

WORKDIR /app

ADD package.json ./
ADD yarn.lock ./

RUN yarn install

ADD tsconfig.json ./
ADD src/ ./src
RUN yarn run tsc
