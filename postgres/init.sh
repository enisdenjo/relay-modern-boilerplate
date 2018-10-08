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

DROP ROLE IF EXISTS anonymous;
CREATE ROLE anonymous;

DROP ROLE IF EXISTS viewer;
CREATE ROLE viewer;

\echo
\echo 'Setting up schemas...'
\echo

GRANT USAGE ON SCHEMA public TO viewer;
GRANT USAGE ON SCHEMA public TO anonymous;

CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO viewer;
GRANT USAGE ON SCHEMA private TO anonymous;

\i ${POSTGRES_INIT_DIR}/database/schemas.sql

\echo
\echo 'Setting up policies...'
\echo

\i ${POSTGRES_INIT_DIR}/database/policies.sql

COMMIT;

\echo
\echo 'Database setup done.'
\echo

BEGIN;

\echo
\echo 'Applying seed...'
\echo

\i ${POSTGRES_INIT_DIR}/database/seed.sql

COMMIT;

\echo
\echo 'Seed applied.'
\echo
EOSQL
