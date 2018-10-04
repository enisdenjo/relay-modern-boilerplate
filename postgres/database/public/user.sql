CREATE TABLE IF NOT EXISTS public.user (
  row_id uuid PRIMARY KEY REFERENCES private.user(row_id) ON DELETE CASCADE,

  email email_address UNIQUE NOT NULL,

  first_name text NOT NULL,
  last_name  text NOT NULL,

  created_at created_timestamp,
  updated_at updated_timestamp
);

GRANT SELECT, UPDATE ON TABLE public.user TO viewer;

-- here we grant select to the anonymous user. we do so
-- that we can use the graphql query `{ viewer { id } }`
-- and its result `viewer: { 'someid'} OR viewer: null`
-- to indicate whether the user is logged in or not
-- without the grant the query would raise an exception.
-- take a look at: `policies/user.sql` to see how we
-- hide the table rows to prevent data leakage
GRANT SELECT ON TABLE public.user TO anonymous;

----

CREATE OR REPLACE FUNCTION public.register(
  email      text,
  first_name text,
  last_name  text,
  password   text
) RETURNS private.jwt_token AS
$$
DECLARE
  tokenDuration   interval := '7 days';
  new_user_row_id uuid;
BEGIN
  -- create user
  WITH new_private_user AS (
    INSERT INTO private.user (password)
      VALUES (crypt(register.password, gen_salt('bf')))
    RETURNING row_id
  )
  INSERT INTO public.user (row_id, email, first_name, last_name)
    VALUES ((SELECT row_id FROM new_private_user), register.email, register.first_name, register.last_name)
  RETURNING row_id INTO new_user_row_id;

  -- make token
  RETURN (
    'viewer',
    EXTRACT(epoch FROM (now() + tokenDuration)),
    new_user_row_id
  )::private.jwt_token;

  -- catch unique violation and nicely report error
  EXCEPTION WHEN unique_violation THEN
    RAISE EXCEPTION 'User already exists!';
END;
$$
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER;

COMMENT ON FUNCTION public.register IS 'Creates a new `User`.';

----

CREATE OR REPLACE FUNCTION public.authenticate(
  email    text,
  password text
) RETURNS private.jwt_token AS
$$
DECLARE
  tokenDuration interval := '7 days';
  token         private.jwt_token;
BEGIN
  token := (
    SELECT
      (
        'viewer',
        EXTRACT(epoch FROM (now() + tokenDuration)),
        new_public_user.row_id
      )
    FROM public.user AS new_public_user
      INNER JOIN private.user AS private_user ON (private_user.row_id = new_public_user.row_id)
    WHERE (
      new_public_user.email = authenticate.email
    ) AND (
      private_user.password = crypt(authenticate.password, private_user.password)
    )
  );

  IF token IS NULL THEN
    RAISE EXCEPTION 'Wrong email or password.';
  END IF;

  RETURN token;
END;
$$
LANGUAGE plpgsql VOLATILE STRICT
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
