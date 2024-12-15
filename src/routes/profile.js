// Router for /profiles page
const express = require("express");
const router = express.Router();
const profileController = require("../app/controllers/ProfileController");
const authMiddleware = require("../middleware/auth");

// Profile routes
router.get("/:username", authMiddleware, profileController.show);

module.exports = router;