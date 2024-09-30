const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
// const userController = require("./../controllers/userController");
// const authController = require("./../controllers/authController");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Each user must have a name"],
  },
  email: {
    type: String,
    required: [true, "You must write an email"],
    unique: true,
    lowercase: true,
    validator: [validator.isEmail, "User must have valid email "],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please provide strong password"],
    minLength: [8, "A user password  must have more or equal 10 characters"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm the password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password are not the same",
    },
  },
  passwordChangedAt: Date,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  token: {
    type: String,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  todos: [
    {
      // Parent referencing the child (Todos)
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo", // Reference to the Todo model
    },
  ],
});

userSchema.pre("save", async function (next) {
  // Only run this fun if password is modified
  if (!this.isModified("password")) return next();
  // Hash the password with cost 12
  this.password = await bcrypt.hash(this.password, 12);
  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  this.passwordChangedAt = this.passwordChangedAt;
  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.methods.changedPasswordAfter = function (JWTTimesTamp) {
  if (this.passwordChangedAt) {
    // eslint-disable-next-line radix
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(changedTimestamp, JWTTimesTamp);
    return JWTTimesTamp < changedTimestamp;
  }
  return false;
};
userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "todos",
    // select: "-__v -passwordChangedAt",
  });
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
