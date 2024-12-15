// Router for /profiles page
const express = require("express");
const router = express.Router();

// Get view and db from Controllers
const supportController = require("../app/controllers/SupportController");

router.get("/", supportController.show);
router.get("/:id", supportController.show);

module.exports = router;