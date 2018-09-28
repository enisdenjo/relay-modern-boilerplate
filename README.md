<br>
<h3 align="center">
  Relay Modern Boilerplate
</h3>
<p align="center">
  <a href="https://www.docker.com/">Docker</a>
  +
  <a href="https://www.postgresql.org/">Postgres</a>
  +
  <a href="https://www.graphile.org/postgraphile/">PostGraphile</a>
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
    1.  Run `docker-compose up` to build and start [Postgres](https://www.postgresql.org/) + [PostGraphile](https://www.graphile.org/postgraphile/)<br>
        _If you set `NO_AUTH=true` for `postgraphile` in [docker-compose.yml](./docker-compose.yml), you can navigate to [http://locahost:5000/graphiql](http://locahost:5000/graphiql) to see the GraphiQL_
5.  Starting the **app**
    1.  Change directory to [app](./app)
    2.  Run `yarn` to install dependencies
    3.  Run `yarn dev` to run the [webpack dev server](https://github.com/webpack/webpack-dev-server)
    4.  In another terminal run `yarn dev:relay` to run the [Relay Compiler](https://facebook.github.io/relay/docs/en/graphql-in-relay.html#relay-compiler) and have it watch for changes
    5.  You can navigate to [http://locahost:4455/](http://locahost:4466/) to see the application
