FROM node:21.2.0

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "start" ]
