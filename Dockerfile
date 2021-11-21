FROM node:16.13.0

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]

