const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:La3NE6jIvOqcc0yY@cluster0.oo8wkd1.mongodb.net/todos"
);

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
