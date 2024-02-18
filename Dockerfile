FROM node:20.11-alpine

WORKDIR /sudoku
RUN apk update
RUN npm install --location=global npm@10.4.0

ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json /sudoku/package.json

