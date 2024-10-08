const express = require("express");
var cors = require("cors");
const userRouter = require("./routes/userRoutes");
const todoRouter = require("./routes/todoRoutes");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const AppError = require("./utils/appError.js");
// eslint-disable-next-line import/extensions
const globalErrorHandler = require("./controllers/errorController.js");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
// Set security HTTP Headers
app.use(helmet());

// Middleware function to limit num of requests
const limiter = rateLimit({
  max: 1000000000000,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// To make the application accept JSON datatype
// Body parser , Reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
// app.use(
//   hpp({
//     whitelist: [

//     ],
//   })
// );
// To serve static files
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/todo", todoRouter);
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
  });
});
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
