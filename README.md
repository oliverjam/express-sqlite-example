# Express SQLite example

This is an example of how I'd set up a basic Express + SQLite app.

## DB setup

The SQLite connection is defined in `src/database/db.js`. This will connect to an existing DB file named `db.sqlite` or create a new one if it doesn't exist. It will also run the commands in `src/database/schema.sql` to ensure the DB contains the right tables.

This DB setup happens whenever the server starts, so make sure the `schema.sql` commands are safe to be re-run.

You can seed the DB with some example values by running `npm run seed`. This will execute the commands in `src/database/seed.sql`, which will insert some data.

The `db.sqlite` file is listed in the `.gitignore` so each local user can have their own copy of the DB.
