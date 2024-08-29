const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const route = require("./routes");

const app = express();
const db = require("./config/db");

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

// Set handlebars as app engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));
app.use("/public", express.static(path.join(__dirname)));

// Routes init
route(app);

app.listen(3000);
