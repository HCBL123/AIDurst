// Router for /profiles page
const express = require("express");
const router = express.Router();

// Get view and db from Controllers
const catalogController = require("../app/controllers/CatalogController");

router.use("/:_id", catalogController.show);
router.use("/", catalogController.index);

module.exports = router;
