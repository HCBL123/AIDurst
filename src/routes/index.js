const express = require("express");
const router = express.Router();

// Import routes
const booksRouter = require("./books");
const calendarRouter = require("./calendar");
const profileRouter = require("./profile");
const resultsRouter = require("./results");
const supportRouter = require("./support");

// Register routes
router.use("/books", booksRouter);
router.use("/calendar", calendarRouter);
router.use("/profile", profileRouter);
router.use("/results", resultsRouter);
router.use("/support", supportRouter);

module.exports = router;