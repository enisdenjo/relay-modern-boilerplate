FROM node

# Prepare postgraphile

WORKDIR /usr/relay-modern-boilerplate/postgraphile

COPY package.json package-lock.json ./
RUN npm i

COPY . .

# TODO: production build steps
