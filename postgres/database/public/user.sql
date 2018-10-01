CREATE TABLE IF NOT EXISTS public.user (
  row_id uuid PRIMARY KEY REFERENCES private.user(row_id) ON DELETE CASCADE,

  email email_address UNIQUE NOT NULL,

  first_name text NOT NULL,
  last_name  text NOT NULL,

  created_at created_timestamp,
  updated_at updated_timestamp
);

GRANT SELECT, UPDATE ON TABLE public.user TO viewer;

----

CREATE OR REPLACE FUNCTION public.register(
  email      text,
  first_name text,
  last_name  text,
  password   text
) RETURNS private.jwt_token AS
$$
  WITH private_user AS (
    INSERT INTO private.user (password)
      VALUES (crypt(register.password, gen_salt('bf')))
    RETURNING row_id
  ), public_user AS (
    INSERT INTO public.user (row_id, email, first_name, last_name)
      VALUES ((SELECT row_id FROM private_user), register.email, register.first_name, register.last_name)
    RETURNING row_id
  )
  SELECT (
      'viewer',
      extract(epoch from now() + interval '7 days'),
      (SELECT row_id FROM public_user)
    )::private.jwt_token
$$
LANGUAGE SQL VOLATILE
SECURITY DEFINER;

COMMENT ON FUNCTION public.register IS 'Creates a new `User`.';

----

CREATE OR REPLACE FUNCTION public.authenticate(
  email    text,
  password text
) RETURNS private.jwt_token AS
$$
  SELECT
    (
      'viewer',
      extract(epoch from now() + interval '7 days'),
      public_user.row_id
    )::private.jwt_token
  FROM public.user AS public_user
    INNER JOIN private.user AS private_user ON (private_user.row_id = public_user.row_id)
  WHERE (
    public_user.email = authenticate.email
  ) AND (
    private_user.password = crypt(authenticate.password, private_user.password)
  )
$$
LANGUAGE SQL VOLATILE STRICT
SECURITY DEFINER;

COMMENT ON FUNCTION public.authenticate IS 'Authenticates a `User`.';

----

CREATE OR REPLACE FUNCTION public.viewer() RETURNS public.user AS
$$
  SELECT * FROM public.user WHERE (row_id::text = current_setting('jwt.claims.sub', true))
$$
LANGUAGE SQL STABLE
COST 10000; -- so that the planner calls the function as little as possible

COMMENT ON FUNCTION public.viewer IS 'Currently authenticated `User`.';
