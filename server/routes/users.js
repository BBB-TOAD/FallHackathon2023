// Import necessary modules
const express = require("express");
const router = express.Router();

// Import user-related controllers and middleware ( For authentication)
const UserController = require("../controllers/userController");
const AuthMiddleware = require("../middlewares/authMiddleware");

// Route to create a new user
router.post("/", UserController.createUser);

// Route to get all users
router.get("/", UserController.getAllUsers);

// Route to get a user
router.get("/:user_id", UserController.getUserById);

// Route to update a user's profile
router.put(
  "/:user_id",
  AuthMiddleware.authenticateUser,
  UserController.updateUser
);

// Route to delete a user
router.put(
  "/user_id",
  AuthMiddleware.authenticateUser,
  UserController.deleteUser
);

module.exports = router;
