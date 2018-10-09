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

----

CREATE OR REPLACE FUNCTION public.update_article(
  row_id        uuid,
  title         text,
  content       text = NULL
) RETURNS public.article AS
$$
  UPDATE public.article SET
    title=update_article.title,
    content=update_article.content,
    updated_at=now()
  WHERE (row_id = update_article.row_id)
  RETURNING *
$$
LANGUAGE SQL VOLATILE;

COMMENT ON FUNCTION public.update_article IS 'Updates an `Article` with the `rowId`.';

----

CREATE OR REPLACE FUNCTION public.delete_article(
  row_id uuid
) RETURNS public.article AS
$$
  DELETE FROM public.article WHERE (row_id = delete_article.row_id)
  RETURNING *
$$
LANGUAGE SQL VOLATILE;

COMMENT ON FUNCTION public.delete_article IS 'Deletes an `Article` with the `rowId`.';
