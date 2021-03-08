FROM node:12-alpine 
#As development

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install --only=development

# COPY . .

# RUN npm install; \
#     npm run build; \
#     npm run build:webpack; \
#     rm -rf node_modules;

COPY ./webpack-dist .

# FROM node:12-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000

CMD ["node", "server.bundle.js"]