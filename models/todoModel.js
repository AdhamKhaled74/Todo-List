const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  status: {
    type: String,
    enum: ["will do", "doing", "done"], // Restrict to these values
    default: "will do", // Default status
  },
});
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
