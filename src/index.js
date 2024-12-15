const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const port = process.env.PORT || 4000;
const db = require("./config/db");

// Connect to DB
db.connect();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
}));

// View engine setup
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));
app.use("/public", express.static(path.join(__dirname)));

// Register all routes
app.use("/", route);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});