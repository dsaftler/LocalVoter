/* eslint-disable no-unused-vars */
// Dependencies
require("dotenv").config();
const keys = require("./keys.js");
// var Axios = require("axios")
// var axios = new Axios(axios.defaults.headers.common[keys.billtrack50]);
const passport = require("passport");
require("./config/passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./models");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";

const express = require("express");
const session = require("express-session");
const app = express();
// app.use(require('serve-static')(__dirname + './public'));
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
// var PORT = 3000;
let PORT = process.env.PORT || 3000;

let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
// eslint-disable-next-line no-empty-function
db.sequelize.sync(syncOptions).then(function() {});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("connected at port " + PORT);
});
