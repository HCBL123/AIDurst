// Doctor models to access data from mongodb
const Doctor = require("../models/Doctors");
// FUNCTION to convert scheme to object
const { multipleMongooseToObject } = require("../../util/mongoose");

class ProfilesController {
  index(req, res, next) {
    Doctor.find({})
      .then((results) => {
        res.render("books", {
          profiles: multipleMongooseToObject(results),
        });
      })
      .catch(next);
  }

  show(req, res) {
    res.render("profile");
  }
}

module.exports = new ProfilesController();
