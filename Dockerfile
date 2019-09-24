FROM node:10

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --silent

COPY . /app

EXPOSE 3000

CMD ["yarn", "start"]
