// Router for /profiles page
const express = require("express");
const router = express.Router();

// Get view and db from Controllers
const profileController = require("../app/controllers/ProfileController");

router.get("/:username", profileController.show);

module.exports = router;

