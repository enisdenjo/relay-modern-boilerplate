CREATE TABLE IF NOT EXISTS public.user (
  id uuid PRIMARY KEY REFERENCES private.user(id) ON DELETE CASCADE,

  email email_address UNIQUE NOT NULL,

  first_name text NOT NULL,
  last_name  text NOT NULL,

  created_at created_timestamp,
  updated_at updated_timestamp
);

GRANT SELECT, UPDATE ON TABLE public.user TO viewer;

----

CREATE OR REPLACE FUNCTION public.user_full_name(
  "user" public.user
) RETURNS text AS
$$
  SELECT "user".first_name || ' ' || "user".last_name
$$
LANGUAGE SQL STABLE;

COMMENT ON FUNCTION public.user_full_name IS E'@notNull\nCombined first and last name of the `User`.';
