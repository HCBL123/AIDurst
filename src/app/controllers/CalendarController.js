// Results models to access data from mongodb
const Results = require("../models/Results");
// FUNCTION to convert scheme to object
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require("../../util/mongoose");

class ResultsController {
  // [GET] /results/:_id
  show(req, res, next) {
    const sessionData = req.session;
    const isLoggedIn = req.session.isLoggedIn;
    const username = req.session.username;
    if (isLoggedIn) {
      Results.findOne({ username: username })
        .then((results) =>
          res.render("calendar", { result: mongooseToObject(results) }),
        )
        .catch(next);
    } else {
      res.send("Please log in");
    }
  }

  index(req, res, next) {
    const sessionData = req.session;
    const isLoggedIn = req.session.isLoggedIn;
    const username = req.session.username;

    Results.updateOne({ username: username }, req.body).then().catch(next);
    Results.findOne({ username: username })
      .then((results) =>
        res.render("calendar", {
          result: mongooseToObject(results),
        }),
      )
      .catch(next);
  }

  specific(req, res, next) {
    const sessionData = req.session;
    const isLoggedIn = req.session.isLoggedIn;
    const username = req.session.username;
    Results.findOne({ username: username })
      .then((results) =>
        res.render("calendardetails", {
          result: mongooseToObject(results),
        }),
      )
      .catch(next);
  }
}

module.exports = new ResultsController();
