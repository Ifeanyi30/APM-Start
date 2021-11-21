FROM alpine:3.13

ENV NODE_VERSION 16.13.0

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install --save --legacy-peer-deps

COPY . .

EXPOSE 4200

CMD ["npm", "start"]

