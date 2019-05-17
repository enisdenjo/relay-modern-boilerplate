-- anonymous user cannot see any user
CREATE POLICY anonymous_user_select_policy ON public.user
  FOR SELECT
  TO anonymous
  USING (false);

----

-- authenticated user can see all users
CREATE POLICY viewer_user_select_policy ON public.user
  FOR SELECT
  TO viewer
  USING (true);

-- authenticated user can see all users
CREATE POLICY viewer_user_update_policy ON public.user
  FOR UPDATE
  TO viewer
  USING (true) -- can see all users
  WITH CHECK (
    -- can update only itself
    "user".id = (SELECT id FROM public.viewer())
  );

-- other policies are not required since functions
-- which create users are behind a `SECURITY DEFINER`

----

ALTER TABLE public.user ENABLE ROW LEVEL SECURITY;
