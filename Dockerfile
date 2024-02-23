FROM node:lts-alpine AS build

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --production --silent

COPY . .

RUN npm i -g @nestjs/cli

RUN npm run build

EXPOSE 3000

RUN npx prisma generate

RUN npx prisma migrate dev

RUN npx ts-node ./prisma/seed.ts

RUN chown -R node /usr/src/app

USER node

CMD ["npm", "run", "start:prod"]
