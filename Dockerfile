FROM node:15.12.0

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--host"]