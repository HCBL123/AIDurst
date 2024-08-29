// Router for /profiles page
const express = require("express");
const router = express.Router();

// Get view and db from Controllers
const profilesController = require("../app/controllers/ProfilesController");

router.use("/:slug", profilesController.show);
router.use("/", profilesController.index);

module.exports = router;
