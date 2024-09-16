const express = require("express");
const router = express.Router();

// Get view and db from Controllers
const datepickController = require("../app/controllers/DatepickController");

router.use("/:_id", datepickController.show);
router.use("/", datepickController.index);

module.exports = router;
