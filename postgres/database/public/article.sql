CREATE TABLE public.article (
  row_id        uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_row_id uuid NOT NULL REFERENCES public.user(row_id) ON DELETE CASCADE,

  title   text NOT NULL UNIQUE CHECK(LENGTH(title) > 3),
  content text,

  created_at created_timestamp,
  updated_at updated_timestamp
);

GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.article TO viewer;

----

CREATE OR REPLACE FUNCTION public.create_article(
  title         text,
  content       text = NULL
) RETURNS public.article AS
$$
  INSERT INTO public.article (author_row_id, title, content)
    VALUES ((SELECT row_id FROM public.viewer()), create_article.title, create_article.content)
  RETURNING *
$$
LANGUAGE SQL VOLATILE;

COMMENT ON FUNCTION public.create_article IS 'Creates an `Article` with the `viewer` as the author.';
