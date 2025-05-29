FROM node:20-alpine

WORKDIR /app

COPY dist/package.json .
COPY dist/package-lock.json .

RUN npm install

COPY dist ./

CMD ["node", "main.js"]