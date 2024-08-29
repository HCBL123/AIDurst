// Doctor models to access data from mongodb
const Results = require("../models/Results");
// FUNCTION to convert scheme to object
const {} = require("../../util/mongoose");

class ProfilesController {
  // [GET] /profiles
  index(req, res, next) {
    Results.findById(req.params.id)
      .then((results) => {
        res.render("books", {
          profiles: multipleMongooseToObject(results),
        });
      })
      .catch(next);
  }

  // [GET] /:slug
  show(req, res) {
    res.render("results");
  }
}

module.exports = new ProfilesController();
