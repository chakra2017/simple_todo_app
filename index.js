const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    msg: todos,
  });
});

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });

  res.json({
    msg: "todo created",
  });
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
