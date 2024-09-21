const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const route = require("./routes");
var bodyParser = require("body-parser");
const session = require("express-session");
const port = process.env.PORT || 4000;

const app = express();
const db = require("./config/db");

// Connect to DB
db.connect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  }),
);

// Set handlebars as app engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));
app.use("/public", express.static(path.join(__dirname)));

// Routes init
route(app);

app.listen(port);
