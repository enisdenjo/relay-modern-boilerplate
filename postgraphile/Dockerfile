FROM node

WORKDIR /usr/src/postgraphile

# Install app dependencies
COPY package.json ./
RUN npm install

COPY . .
