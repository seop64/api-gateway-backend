FROM node:20.15.1-alpine3.20 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install

COPY . /app
CMD ["npm", "start"]