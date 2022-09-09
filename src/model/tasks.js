const db = require("../database/db.js");

module.exports = { listTasks };

/**
 * Create a "prepared statement" _outside_ the function
 * Created once when the server starts and re-used for each request.
 * This is faster.
 * See: https://github.com/WiseLibs/better-sqlite3/issues/793
 */
const select_tasks = db.prepare(/*sql*/ `
  SELECT content FROM tasks
`);

function listTasks() {
  return select_tasks.all();
}
