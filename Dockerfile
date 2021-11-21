FROM node:latest

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install -g npm@latest

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]

