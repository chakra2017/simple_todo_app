const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect();

const TodoSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", TodoSchema);
module.exports = {
  todo: todo,
};
