// Doctor models to access data from mongodb
const Doctors = require("../models/Doctors");
// FUNCTION to convert scheme to object
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class BooksController {
  // [GET] /books
  index(req, res, next) {
    res.render("support");
  }

  // [GET] /:slug
  show(req, res, next) {
    res.render("support");
  }
}

module.exports = new BooksController();
