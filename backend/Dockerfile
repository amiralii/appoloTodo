FROM mhart/alpine-node:10

WORKDIR /var/www/backend

COPY . .

RUN npm install --prod

RUN npm install nodemon -g

RUN npm run server:dev

EXPOSE 3000



