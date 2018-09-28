'use strict';

const http = require('http');
const { postgraphile } = require('postgraphile');

// plugins
const NonNullRelationsPlugin = require('./plugins/NonNullRelationsPlugin');

// constants
const user = process.env.POSTGRAPHILE_USER;
const password = process.env.POSTGRAPHILE_PASSWORD;
const db = process.env.POSTGRES_DB;
const schema = 'public';
const port = process.env.POSTGRAPHILE_PORT || 5000;
const noAuth = process.env.NO_AUTH === 'true';

console.log(`Starting PostGraphile${noAuth ? ' in no-auth mode' : ''}...\n`);

http
  .createServer(
    postgraphile(`postgres://${user}:${password}@postgres:5432/${db}`, schema, {
      classicIds: true,
      dynamicJson: true,
      setofFunctionsContainNulls: false,
      defaultRole: noAuth ? 'viewer' : 'anonymous',
      graphiql: noAuth,
      disableDefaultMutations: true,
      graphileBuildOptions: {
        pgStrictFunctions: true,
      },
      appendPlugins: [NonNullRelationsPlugin],
    }),
  )
  .listen(port);
