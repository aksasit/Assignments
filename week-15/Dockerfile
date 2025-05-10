FROM node:20-alpine

WORKDIR /app

COPY . . 

RUN npm install node
RUN npx generate prisma
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]