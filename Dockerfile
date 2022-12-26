FROM node:latest
WORKDIR /app
COPY . .
RUN npm install -g json-server
RUN npm install
EXPOSE 3001 3000