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

# Talk

This repo is used in my talk [Reintroducing Relay Modern](https://www.youtube.com/watch?v=5WjXX9-Vu-o) where I talk about the overlooked beauties of [Relay](https://relay.dev).

# Quick start

1.  Make sure that you have [Docker](https://www.docker.com/products/docker-engine) and [Docker Compose](https://docs.docker.com/compose/install/) installed
2.  Clone this repo using `git clone --depth=1 https://github.com/enisdenjo/relay-modern-boilerplate.git`
3.  Change directory to `relay-modern-boilerplate`
4.  Run `docker-compose up` to build and start [Postgres](https://www.postgresql.org/) + [PostGraphile](https://www.graphile.org/postgraphile/) + [webpack-dev-server](https://github.com/webpack/webpack-dev-server)<br>
    _Initial build may take some time because we need to install [Watchman](https://facebook.github.io/watchman/) from source_
    - Postgres database is exposed at: **[postgres://localhost:5432/graphql](postgres://localhost:5432/graphql)**
    - GraphQL endpoint is located at: **[http://localhost:4400/graphql](http://localhost:4400/graphql)**<br>
      _Explore the schema using [GraphiQL](https://github.com/graphql/graphiql) at: [http://localhost:4400/graphiql](http://localhost:4400/graphiql)_
    - The application is located at: **[http://localhost:4401](http://localhost:4401)**<br>
      _Use `john@doe.com:password` to login_

# Documentation

Detailed documentation coming soon, for now happy code digging. 😁

# About this repo

To keep the talk consistent and in sync, this repo will **not be updated any further**. However, if you are interested in how this would look like _today_ or how it can become an actual project, check out [heltin](https://github.com/bhidapa/heltin) 👀 .
