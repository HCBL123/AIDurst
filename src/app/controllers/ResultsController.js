// Results models to access data from mongodb
const Results = require("../models/Results");
// FUNCTION to convert scheme to object
const { mongooseToObject } = require("../../util/mongoose");

class ResultsController {
  // [GET] /results/:_id
  show(req, res, next) {
    Results.findById(req.params.id)
      .then((results) => {
        res.render("results", {
          results: mongooseToObject(results),
        });
      })
      .catch(next);
  }

  index(req, res, next) {
    console.log(req.params.id);
  }
}

module.exports = new ResultsController();
