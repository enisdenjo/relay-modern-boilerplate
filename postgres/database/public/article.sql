CREATE TABLE public.article (
  id        uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id uuid NOT NULL REFERENCES public.user(id) ON DELETE CASCADE,

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
  INSERT INTO public.article (author_id, title, content)
    VALUES ((SELECT id FROM public.viewer()), create_article.title, create_article.content)
  RETURNING *
$$
LANGUAGE SQL VOLATILE;

COMMENT ON FUNCTION public.create_article IS 'Creates an `Article` with the `viewer` as the author.';

----

CREATE OR REPLACE FUNCTION public.update_article(
  id        uuid,
  title         text,
  content       text = NULL
) RETURNS public.article AS
$$
  UPDATE public.article SET
    title=update_article.title,
    content=update_article.content,
    updated_at=now()
  WHERE (id = update_article.id)
  RETURNING *
$$
LANGUAGE SQL VOLATILE;

COMMENT ON FUNCTION public.update_article IS 'Updates an `Article` with the `rowId`.';

----

CREATE OR REPLACE FUNCTION public.delete_article(
  id uuid
) RETURNS public.article AS
$$
  DELETE FROM public.article WHERE (id = delete_article.id)
  RETURNING *
$$
LANGUAGE SQL VOLATILE;

COMMENT ON FUNCTION public.delete_article IS 'Deletes an `Article` with the `rowId`.';
