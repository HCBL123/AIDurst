// Router for /profiles page
const express = require("express");
const router = express.Router();

// Get view and db from Controllers
const loginController = require("../app/controllers/LoginController");

router.get("/", loginController.index);
router.post("/", loginController.login);
router.get("/logout", loginController.logout);

module.exports = router;
