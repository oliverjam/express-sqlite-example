BEGIN;

CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT,
  -- SQLite doesn't have proper booleans, so we use 0 or 1
  complete BOOLEAN DEFAULT 0 CHECK (complete IN (0, 1)),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

COMMIT;