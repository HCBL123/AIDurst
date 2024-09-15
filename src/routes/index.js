//const profilesRouter = require("./profiles");
const Doctors = require("../app/models/Doctors");
// FUNCTION to convert scheme to object
const { mongooseToObject } = require("../util/mongoose");

const resultsRouter = require("./results");
const booksRouter = require("./books");
const loginRouter = require("./login");
const supportRouter = require("./support");
const profileRouter = require("./profile");

function route(app) {
  // [GET] /profiles
  //    app.use("/profiles", profilesRouter);
  app.use("/profile", profileRouter);

  app.use("/results", resultsRouter);

  app.use("/books", booksRouter);

  app.use("/login", loginRouter);

  app.use("/support", supportRouter);

  // [GET] /
  app.get("/", (req, res) => {
    res.render("home");
  });
  app.post("/", (req, res, next) => {
    const sessionData = req.session;
    const isLoggedIn = req.session.isLoggedIn;
    const username = req.session.username;
    if (isLoggedIn) {
      Doctors.updateOne({ username: username }, req.body)
        .then(res.render("home"))
        .catch(next);
    } else {
      res.send("Please log in");
    }
  });
}

module.exports = route;
