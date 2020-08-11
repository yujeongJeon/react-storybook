FROM node:10
MAINTAINER yujeongJeon <workingnewjeong@gmail.com>

RUN mkdir -p /app/src

COPY package.json /app/src/package.json
RUN  cd /app/src; npm install

COPY . /app/src

WORKDIR /app/src

CMD npm run dev