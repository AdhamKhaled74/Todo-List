const Todo = require("./../models/todoModel");
const APIFeature = require("../utils/apiFeatures");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");
exports.getAllTodo = catchAsync(async (req, res, next) => {
  const features = new APIFeature(Todo.find(), req.query).paginate();
  const todo = await features.query.populate("user", "name email");

  res.status(200).json({
    status: "success",
    result: todo.length,
    data: {
      todo,
    },
  });
});
exports.getUserTodos = catchAsync(async (req, res, next) => {
  const todos = await Todo.find({ user: req.params.id });
  console.log(todos);

  res.status(200).json({
    status: "success",
    result: todos.length,
    data: {
      todos,
    },
  });
});
exports.getTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!todo) {
    return next(new AppError(`No todo found with this ${req.params.id}`, 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      todo,
    },
  });
});
exports.createTodo = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.decode(token);
  const { title, description, status } = req.body;
  const newTodo = new Todo({
    title,
    description,
    status,
    user: decoded.id,
  });
  await newTodo.save();
  res.status(201).json({
    status: "Success",
    data: {
      todo: newTodo,
    },
  });
});
exports.updateTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!todo) {
    return next(new AppError(`No todo found with this ${req.params.id}`, 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      todo,
    },
  });
});
exports.deleteTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) {
    return next(new AppError(`No todo found with this ${req.params.id}`, 404));
  }
  res.status(204).json({
    status: "Success",
    data: null,
  });
});

exports.changeTodoStatus = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!["will do", "doing", "did"].includes(status)) {
    return next(new AppError("Invalid status", 400));
  }
  const todo = await Todo.findByIdAndUpdate(id, { status }, { new: true });
  if (!todo) {
    return next(new AppError("Todo not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      todo,
    },
  });
});
