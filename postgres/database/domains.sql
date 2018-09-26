CREATE DOMAIN created_timestamp timestamp WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'UTC');

----

CREATE DOMAIN updated_timestamp timestamp WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'UTC');
