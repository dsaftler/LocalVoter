var db = require("../models");
var passport = require("../config/passport");

module.exports = app => {
  // const SHA2 = require("sha2");
  // app.post("/api/signup", (req, res) => {
  //   // let pwd = SHA2(req.body.password, 256);
  //   db.User.create({
  //     username: req.body.username,
  //     password: pwd,
  //     state: req.body.state,
  //     zip: req.body.zip
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  //   // console.log(req.body);
  // });
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }
     console.log("new user");
    ).then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    db.User.findAll({
      where: {
        username: req.body.username,
        password: pwd
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
    // console.log(req.body);
  });
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        state: req.user.state,
        zip: req.user.zip,
        id: req.user.id
      });
    }
  });
};
