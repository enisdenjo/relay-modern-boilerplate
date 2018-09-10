<br>
<h3 align="center">
  Relay Modern Boilerplate
</h3>
<p align="center">
  <a href="https://www.docker.com/">Docker</a>
  +
  <a href="https://www.prisma.io/">Prisma</a>
  +
  <a href="https://webpack.js.org/">Webpack</a>
  +
  <a href="https://reactjs.org/">React</a>
  +
  <a href="https://www.typescriptlang.org/">TypeScript</a>
  +
  <a href="http://facebook.github.io/relay/docs/en/thinking-in-relay.html">Relay Modern</a>
  =
  <b>Awesomeness</b>
</p>
<br>

# Quick start

1.  Make sure that you have the following installed:
    - [Node](https://nodejs.org/en/download/)
    - [Yarn](https://yarnpkg.com/lang/en/docs/install/)
    - [Docker](https://www.docker.com/products/docker-engine) and [Docker Compose](https://docs.docker.com/compose/install/)
2.  Clone this repo using `git clone --depth=1 https://github.com/enisdenjo/relay-modern-boilerplate.git`
3.  Change directory to `relay-modern-boilerplate`
4.  Starting the **database**
    1.  Change directory to [database](./database)
    2.  Run `docker-compose up` to start [Prisma](https://www.prisma.io/) and wait for it to boot
    3.  In another terminal install the [Prisma CLI](https://github.com/prisma/prisma) by running `yarn global add prisma`
    4.  Run `prisma deploy && prisma seed` to create and populate the database
    5.  You can navigate to [http://locahost:4466/](http://locahost:4466/) to see the Playground
5.  Starting the **frontent**
    1.  Change directory to [frontend](./frontend)
    2.  Run `yarn` to install dependencies
    3.  Run `yarn dev` to run the [webpack dev server](https://github.com/webpack/webpack-dev-server)
    4.  In another terminal run `yarn dev:relay` to run the [Relay Compiler](https://facebook.github.io/relay/docs/en/graphql-in-relay.html#relay-compiler) and have it watch for changes
    5.  You can navigate to [http://locahost:4455/](http://locahost:4466/) to see the application
