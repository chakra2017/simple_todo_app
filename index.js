const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();

app.use(express.json());
app.get("/todos", function (req, res) {});

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  }
});

app.post("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  }
});

module.exports = app;
