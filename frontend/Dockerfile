FROM node:14.17.1-alpine
WORKDIR /usr/src/

COPY ./app/package*.json ./
RUN npm install
COPY ./app ./