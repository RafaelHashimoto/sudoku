FROM node:20.11-alpine

WORKDIR /sudoku
RUN apk update

COPY . .
RUN npm install
