FROM node:14.18.0

RUN mkdir -p /app/src

WORKDIR /app/src

COPY . .

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]

