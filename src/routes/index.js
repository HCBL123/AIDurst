const profilesRouter = require("./profiles");
const resultsRouter = require("./results");
const booksRouter = require("./books");

function route(app) {
  // [GET] /profiles
  app.use("/profiles", profilesRouter);

  app.use("/results", resultsRouter);

  app.use("/books", booksRouter);

  // [GET] /
  app.get("/", (req, res) => {
    res.render("home");
  });
}

module.exports = route;
