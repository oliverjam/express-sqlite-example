BEGIN;

INSERT INTO tasks (content, complete) VALUES
  ('Create my first todo', 1),
  ('Buy milk', 0),
  ('Become a 10x developer', 1)
ON CONFLICT DO NOTHING;

COMMIT;
