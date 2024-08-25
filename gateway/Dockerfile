FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN ls -al

RUN npm run build

EXPOSE 5555

CMD ["npm", "start"]