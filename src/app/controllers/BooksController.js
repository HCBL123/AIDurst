// Doctor models to access data from mongodb
const Doctors = require("../models/Doctors");
// FUNCTION to convert scheme to object
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class BooksController {
  // [GET] /books
  index(req, res, next) {
    Doctors.find({})
      .then((profiles) => {
        res.render("books", {
          profiles: multipleMongooseToObject(profiles),
        });
      })
      .catch(next);
  }

  // [GET] /:slug
  show(req, res, next) {
    Doctors.findOne({ _id: req.params._id })
      .then(
        (profiles) => {
          res.render("specbooks", {
            profiles: mongooseToObject(profiles),
          });
        })
      .catch(next);
  }
}

module.exports = new BooksController();
