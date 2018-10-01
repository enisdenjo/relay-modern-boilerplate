CREATE DOMAIN created_timestamp timestamp WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'UTC');
COMMENT ON DOMAIN created_timestamp IS 'UTC timestamp representing the time at which a node is created.';

----

CREATE DOMAIN updated_timestamp timestamp WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'UTC');
COMMENT ON DOMAIN updated_timestamp IS 'UTC timestamp representing the time at which a node is updated.';

----

CREATE DOMAIN email_address text CHECK (VALUE ~ '^.+@.+\.(.+\.)?.+$');
COMMENT ON DOMAIN email_address IS 'E-Mail address with simple plausability check.';
