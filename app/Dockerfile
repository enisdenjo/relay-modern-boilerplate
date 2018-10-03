FROM node

WORKDIR /tmp

# update package lists and install dependencies
RUN \
  apt-get update && \
  apt-get install -y autoconf automake build-essential python-dev

# install watchman
ENV WATCHMAN_VERSION=4.9.0
RUN \
  curl -LO https://github.com/facebook/watchman/archive/v${WATCHMAN_VERSION}.tar.gz && \
  tar xzf v${WATCHMAN_VERSION}.tar.gz && rm v${WATCHMAN_VERSION}.tar.gz && \
  cd watchman-${WATCHMAN_VERSION} && ./autogen.sh && ./configure && make && make install

# cleanup
RUN \
  apt-get purge -y autoconf automake build-essential python-dev && \
  apt-get autoremove -y && \
  apt-get clean all && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /usr/relay-modern-boilerplate/app

COPY package.json package-lock.json ./
RUN npm i

COPY . .

# TODO: production build steps
