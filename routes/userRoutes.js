const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.signIn);
router.post("/forgetPassword", authController.forgetPassword);
router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);
router.patch("/updateMe", authController.protect, userController.updateMe);
router.delete("/deleteMe", authController.protect, userController.deleteMe);
router.route("/").get(authController.protect, userController.getAllUsers);
router.route("/:id").get(authController.protect, userController.getUser);

module.exports = router;
