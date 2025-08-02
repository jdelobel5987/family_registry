FROM node:20
# FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --audit

COPY . .

ENV CHOKIDAR_USEPOLLING=true 
# for hot reloading in Docker

EXPOSE 3000

CMD ["npm", "start"]