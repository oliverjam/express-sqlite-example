const db = require("../database/db.js");

module.exports = { listTasks };

/**
 * Create a "prepared statement" _outside_ the function.
 * Created once when the server starts and re-used for each listTasks() call.
 * This is faster: https://github.com/WiseLibs/better-sqlite3/issues/793
 */
const select_tasks = db.prepare(/*sql*/ `
  SELECT content FROM tasks ORDER BY created_at DESC
`);

function listTasks() {
  return select_tasks.all();
}
