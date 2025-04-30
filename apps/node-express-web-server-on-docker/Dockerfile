FROM node:20-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY index.js .

EXPOSE 5005

CMD ["node", "index.js"]