const express = require("express");
const todoController = require("./../controllers/todoController");
const authController = require("./../controllers/authController");
const router = express.Router();
router
  .route("/")
  .get(authController.protect, todoController.getAllTodo)
  .post(todoController.createTodo);
router
  .route("/:id")
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    todoController.deleteTodo
  );
module.exports = router;
