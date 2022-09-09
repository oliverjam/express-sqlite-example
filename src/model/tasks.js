const db = require("../database/db.js");

module.exports = { listTasks };

const select_tasks = db.prepare(/*sql*/ `
  SELECT content FROM tasks
`);

function listTasks() {
  return select_tasks.all();
}
