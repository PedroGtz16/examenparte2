ARG PORT=8080
FROM node:12-alpine
LABEL autor="Pedro Gtz"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD ["node", "index.js"]