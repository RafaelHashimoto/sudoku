FROM node:17-alpine
WORKDIR /sudoku
RUN apk update
RUN npm install -g npm@8.10.0
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /sudoku/package.json
CMD ["npm", "start"]