const express = require("express");
const { listTasks } = require("./model/tasks.js");

const server = express();

server.get("/", (req, res) => {
  const tasks = listTasks();
  const body = /*html*/ `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Tasks</title>
      </head>
      <body>
        <h1>Tasks</h1>
        <ul>
          ${tasks.map((t) => `<li>${t.content}</li>`).join("")}
        </ul>
      </body>
    </html>
  `;
  res.send(body);
});

module.exports = server;
