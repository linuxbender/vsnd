FROM node:alpine as build-deps
WORKDIR src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.14-alpine

MAINTAINER Team Coblerone <coblerone@dev.ch>

RUN mkdir /etc/nginx/ssl/
COPY --from=build-deps src/app/build /usr/share/nginx/html
COPY cert /etc/nginx/cert
COPY default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]