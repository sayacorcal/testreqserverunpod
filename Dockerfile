FROM node:lts-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY [ ".gitignore", "index.js", "package.json", "package-lock.json", "orders.json", "/usr/src/app/" ]
COPY ["/api", "/usr/src/app/api"]
COPY ["/routes", "/usr/src/app/routes"]
RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]