# Express SQLite example

This is an example of how I'd set up a basic Express + SQLite app.

## DB setup

The SQLite connection is defined in `src/database/db.js`. This will connect to an existing DB file named `db.sqlite` or create a new one if it doesn't exist. It will also run the commands in `src/database/schema.sql` to ensure the DB contains the right tables.

This DB setup happens whenever the server starts, so make sure the `schema.sql` commands are safe to be re-run.

You can seed the DB with some example values by running `npm run seed`. This will execute the commands in `src/database/seed.sql`, which will insert some data.

The `db.sqlite` file is listed in the `.gitignore` so each local user can have their own copy of the DB.

## Deployment

**Important:** SQLite stores data in your app's filesystem (in this case as a file named `db.sqlite`). Most "Platform-as-a-service" hosts like Heroku are "ephemeral"—they recreate your app every time you deploy (and sometimes more often). This means the filesystem does not persist and your data will be lost.

SQLite should be used with platforms that either allow attaching a persistent volume (like [fly.io](https://fly.io/docs/reference/volumes/)), or just give you full control over the computer you're deploying to.
