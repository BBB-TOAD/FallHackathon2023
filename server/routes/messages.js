// Import necessary modules
const express = require("express");
const router = express.Router();

// Import user-related controllers and middleware ( For authentication)
const MessageController = require("../controllers/messagesController");

// Route to create a new user
router.post("/", MessageController.createMessage);

// Route to get all users
router.get("/", MessageController.getAllMessages);

// Route to get a user
router.get("/:user_id", MessageController.getMessageById);

// Route to update a user's profile
router.put("/:user_id", MessageController.updateMessage);

// Route to delete a user
router.put("/user_id", MessageController.deleteMessage);

module.exports = router;
