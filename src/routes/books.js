// Router for /profiles page
const express = require("express");
const router = express.Router();

// Get view and db from Controllers
const booksController = require("../app/controllers/BooksController");

// Routes for booking functionality
router.get("/:_id", booksController.show); // Show specific doctor
router.get("/", booksController.index); // Show all doctors

module.exports = router;