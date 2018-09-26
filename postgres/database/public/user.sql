CREATE TABLE public.user (
  row_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),

  email text NOT NULL,

  first_name text NOT NULL,
  last_name text NOT NULL,

  created_at created_timestamp,
  updated_at updated_timestamp
);

GRANT SELECT, UPDATE ON TABLE public.user TO viewer;
