let db = require("../models");
let passport = require("../config/passport");

module.exports = app => {
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      state: req.body.state,
      zip: req.body.zip
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
        console.log(err);
      });
  });

  app.post("/api/login/", passport.authenticate("local"), function(req, res) {
    successRedirect: '../api/billtrack50/billsJson.js';
    failureRedirect: '/login';
    // req.session[zip] = req.zip;
    // req.session[state] = req.state;
    // res.json(req.user);
    res.send(req.session);
    console.log(req.session);
    // return res.redirect('../api/billtrack50/billsJson.js')
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        state: req.user.state,
        zip: req.user.zip,
        id: req.user.id
      });
    }
  });
};
