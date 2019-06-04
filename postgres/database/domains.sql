CREATE DOMAIN created_timestamp timestamp NOT NULL DEFAULT now();
COMMENT ON DOMAIN created_timestamp IS 'Timestamp representing the time at which a row is created.';

----

CREATE DOMAIN updated_timestamp timestamp NOT NULL DEFAULT now();
COMMENT ON DOMAIN updated_timestamp IS 'Timestamp representing the time at which a row is updated.';

----

CREATE DOMAIN email_address text CHECK (VALUE ~ '^.+@.+\.(.+\.)?.+$');
COMMENT ON DOMAIN email_address IS 'E-Mail address with simple plausability check.';
