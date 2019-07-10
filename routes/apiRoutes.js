let db = require("../models");

let passport = require("../config/passport");

module.exports = app => {
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      state: req.body.state,
      zip: req.body.zip
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
        console.log(err);
      });
    // console.log(dbUser);
    // console.log(db.User);
  });

  app.post("/api/login/", function (req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/bills/all",
      failureRedirect: "/login"
    })(req, res, next);
    // const { email, state, zip, username, uid }= req.body;
    // console.log(req.session);
    // res.send(req.session);
    // console.log(dbUser);
    // return res.redirect('../api/billtrack50/billsJson.js')
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
      console.log(res);
      res.json({
        email: req.user.email,
        state: req.user.state,
        zip: req.user.zip,
        id: req.user.uid
      });
      console.log(res.json);
    }
  });
};
