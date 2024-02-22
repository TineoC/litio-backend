FROM node:lts-alpine AS build

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --production --silent

COPY . .

RUN npm i -g @nestjs/cli

RUN npm run build

EXPOSE 3000

FROM build AS run

RUN chown -R node /usr/src/app

USER node

RUN npm run seed

CMD ["npm", "run", "start:prod"]
