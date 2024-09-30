const express = require("express");
const todoController = require("./../controllers/todoController");
const authController = require("./../controllers/authController");
const router = express.Router();
router
  .route("/")
  .post(todoController.createTodo)
  .get(todoController.getAllTodo);
router
  .route("/:id")
  .get(todoController.getUserTodos)
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(
    // authController.protect,
    // authController.restrictTo("admin"),
    todoController.deleteTodo
  );
router.route("/:id/status").patch(todoController.changeTodoStatus);
module.exports = router;
