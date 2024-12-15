const express = require("express");
const router = express.Router();
const calendarController = require("../app/controllers/CalendarController");
const authMiddleware = require("../middleware/auth");

// Apply authentication to all calendar routes
router.use(authMiddleware);

// Calendar routes
router.get("/:id", calendarController.specific); // Show specific calendar details
router.post("/", calendarController.index); // Update calendar
router.get("/", calendarController.show); // Show calendar

module.exports = router;