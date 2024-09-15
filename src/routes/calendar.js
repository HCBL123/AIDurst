const express = require('express')
const router = express.Router();

const calendarController = require("../app/controllers/CalendarController");

router.use("/", calendarController.index);
router.use("/:id", calendarController.show);

module.exports = router;
