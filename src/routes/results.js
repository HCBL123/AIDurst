// Router for /profiles page
const express = require("express");
const router = express.Router();
const resultsController = require("../app/controllers/ResultsController");
const authMiddleware = require("../middleware/auth");

// Apply authentication to all results routes
router.use(authMiddleware);

// Results routes
router.get("/:id", resultsController.index); // Show specific result
router.get("/", resultsController.show); // Show user's results

module.exports = router;