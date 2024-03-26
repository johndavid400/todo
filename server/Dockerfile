FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

ARG API_DB_URL
ENV DATABASE_URL=$API_DB_URL

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "start"]
