FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN ls -al

RUN npm run build

EXPOSE 1236

CMD ["npm", "start"]
