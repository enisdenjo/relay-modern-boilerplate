-- john@doe.com:password

WITH new_private_user AS (
  INSERT INTO private.user (id, password)
    VALUES (
      '1d35ee19-e375-4a75-b855-76adda9d583e',
      '$2a$06$Ay7kSuH2Ja.yD1mEYF6WF.Ra8ksxrOv4xbyh4w0olCbGu57QBRNHW' -- "password"
    )
  RETURNING id
)
INSERT INTO public.user (id, email, first_name, last_name)
  VALUES (
    (SELECT id FROM new_private_user),
    'john@doe.com',
    'John',
    'Doe'
  );
