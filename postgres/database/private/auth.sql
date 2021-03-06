CREATE TYPE private.jwt_token AS (
  "role" text,    -- postgres role to be used when the user is authenticated
  exp    integer, -- expiry timestamp
  sub    uuid     -- holds the authenticated user `id`
);

----

-- don't expose user passwords to the public
CREATE TABLE private.user (
  id     uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "password" text NOT NULL
);
