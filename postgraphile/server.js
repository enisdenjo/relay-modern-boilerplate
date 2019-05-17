"use strict";

const http = require("http");
const { postgraphile } = require("postgraphile");

// plugins
const PgSimplifyInflectorPlugin = require("@graphile-contrib/pg-simplify-inflector");
const PgIdToRowIdInflectorPlugin = require("./plugins/PgIdToRowIdInflectorPlugin");
const PgNonNullRelationsPlugin = require("@graphile-contrib/pg-non-null/relations");

// constants
const postgresUser = process.env.POSTGRES_USER;
const postgresPassword = process.env.POSTGRES_PASSWORD;
const postgresPort = process.env.POSTGRES_PORT;
const postgresDb = process.env.POSTGRES_DB;
const noAuth = !!process.env.NO_AUTH;

console.log(`Starting PostGraphile${noAuth ? " in no-auth mode" : ""}...\n`);

http
  .createServer(
    postgraphile(
      `postgres://${postgresUser}:${postgresPassword}@postgres:${postgresPort}/${postgresDb}`,
      "public", // introspected schema
      {
        classicIds: true,
        dynamicJson: true,
        setofFunctionsContainNulls: false,
        ignoreRBAC: false,
        pgDefaultRole: noAuth ? "viewer" : "anonymous",
        disableDefaultMutations: true,
        disableQueryLog: false,
        jwtSecret: process.env.POSTGRAPHILE_JWT_SECRET,
        graphiql: true,
        watchPg: true,
        jwtPgTypeIdentifier: "private.jwt_token",
        graphileBuildOptions: {
          pgStrictFunctions: true
        },
        appendPlugins: [
          PgSimplifyInflectorPlugin,
          PgIdToRowIdInflectorPlugin,
          PgNonNullRelationsPlugin
        ]
      }
    )
  )
  .listen(process.env.POSTGRAPHILE_PORT);
