FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN ls -al

RUN npm build

EXPOSE 1235

CMD ["npm", "start"]