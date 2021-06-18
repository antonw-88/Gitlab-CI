FROM node:14-alpine

WORKDIR /usr/src/app

COPY . ./

ARG NODE=develop
ARG start="run dev"
ARG URL=URL

ENV NODE_ENV $NODE
ENV start $start
ENV URL $URL

RUN npm install

EXPOSE 4000

# https://github.com/ufoscout/docker-compose-wait/
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm $start