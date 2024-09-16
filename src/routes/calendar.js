const express = require('express')
const router = express.Router();

const calendarController = require("../app/controllers/CalendarController");

router.use("/:id", calendarController.specific);
router.post("/", calendarController.index);
router.use("/", calendarController.show);



module.exports = router;
