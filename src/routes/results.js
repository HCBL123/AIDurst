// Router for /profiles page
const express = require("express");
const router = express.Router();

// Get view and db from Controllers
const resultsController = require("../app/controllers/ResultsController");

router.use("/:id", resultsController.show);
router.use("/", resultsController.show);

module.exports = router;
