#!/bin/bash
set -e

# If POSTGRES_INIT_DIR is not set, use the current directory.
if [[ -z "${POSTGRES_INIT_DIR}" ]]; then
  POSTGRES_INIT_DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
fi

psql -X -v ON_ERROR_STOP=1 --username "${POSTGRES_USER}"  <<-EOSQL
\echo
\echo 'Initializing database...'
\echo

DROP DATABASE IF EXISTS ${POSTGRES_DB};
CREATE DATABASE ${POSTGRES_DB} WITH TEMPLATE=template0 ENCODING='UTF8';
\c ${POSTGRES_DB}

BEGIN;

\echo
\echo 'Creating extensions...'
\echo

\i ${POSTGRES_INIT_DIR}/database/extensions.sql

\echo
\echo 'Creating domains...'
\echo

\i ${POSTGRES_INIT_DIR}/database/domains.sql

\echo
\echo 'Creating roles...'
\echo

DROP ROLE IF EXISTS ${POSTGRAPHILE_USER};
CREATE ROLE ${POSTGRAPHILE_USER} LOGIN PASSWORD '${POSTGRAPHILE_PASSWORD}' BYPASSRLS;
GRANT CONNECT ON DATABASE ${POSTGRES_DB} TO ${POSTGRAPHILE_USER};

DROP ROLE IF EXISTS anonymous;
CREATE ROLE anonymous;
GRANT anonymous TO ${POSTGRAPHILE_USER};

DROP ROLE IF EXISTS viewer;
CREATE ROLE viewer;
GRANT viewer TO ${POSTGRAPHILE_USER};

\echo
\echo 'Setting up schemas...'
\echo

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO ${POSTGRAPHILE_USER};
GRANT USAGE ON SCHEMA public TO viewer;

CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO viewer;

\echo
\echo 'Setting up public schema...'
\echo

\i ${POSTGRES_INIT_DIR}/database/public.sql

COMMIT;
EOSQL
