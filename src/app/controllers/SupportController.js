// Doctor models to access data from mongodb
const Doctors = require("../models/Doctors");
// FUNCTION to convert scheme to object
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class BooksController {
  index(req, res, next) {
    res.render("support");
  }

  show(req, res, next) {
    res.render("support");
  }
}

module.exports = new BooksController();
