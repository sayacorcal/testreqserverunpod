FROM node:lts-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY [ ".gitignore", "index.js", "package.json", "package-lock.json", "api", "routes", "orders.json", "/usr/src/app/" ]

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]