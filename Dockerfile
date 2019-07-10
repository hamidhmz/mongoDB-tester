FROM keymetrics/pm2:latest-alpine

WORKDIR /home/debian/mongodb-tester

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install

RUN pm2 install pm2-server-monit

CMD ["sh","-c"," npm install && pm2-runtime start pm2.json"]