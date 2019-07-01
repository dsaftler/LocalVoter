// Dependencies
require("dotenv").config();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("./models");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var cookieParser = require('cookie-parser');

var express = require("express");
const session = require('express-session')
var app = express();
// app.use(require('serve-static')(__dirname + './public'));
app.use(cookieParser());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  // secret: process.env.SESSION_SECRET,
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
 }));
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
db.sequelize.sync(syncOptions).then(function() {

});

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
