// Results models to access data from mongodb
const Results = require("../models/Results");
// FUNCTION to convert scheme to object
const { mongooseToObject } = require("../../util/mongoose");

class ResultsController {
  show(req, res, next) {
    const sessionData = req.session;
    const isLoggedIn = req.session.isLoggedIn;
    const username = req.session.username;
    if (isLoggedIn) {
      Results.findOne({ username: username })
        .then((results) => {
          res.render("results", {
            results: mongooseToObject(results),
          });
        })
        .catch(next);
    } else {
      res.send("Please log in");
    }
  }

  index(req, res, next) {
    const sessionData = req.session;
    const isLoggedIn = req.session.isLoggedIn;
    const username = req.session.username;
    if (isLoggedIn) {
      Results.findOne({ _id: req.params.id })
        .then((results) => {
          res.render("results", {
            results: mongooseToObject(results),
          });
        })
        .catch(next);
    } else {
      res.send("Please log in");
    }
  }
}

module.exports = new ResultsController();
