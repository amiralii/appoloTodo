FROM mhart/alpine-node:10

WORKDIR /var/www/frontend

COPY . .

RUN npm install --prod

RUN npm install nodemon -g

RUN npm run client:dev

EXPOSE 2000