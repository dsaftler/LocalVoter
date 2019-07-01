let db = require("../models");
let passport = require("../config/passport");
// app.use(express.cookieParser)
//testing route for ajax
module.exports = app => {
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      state: req.body.state,
      zip: req.body.zip,
      username: req.body.username
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
        console.log(err);
      });
  });
  app.post("/api/login/", passport.authenticate("local"), function (req, res, next) {
    //successRedirect: '/bills/all/state=:req.state';
    //failureRedirect: '/login';
    // req.session[zip] = req.zip;
    // req.session[state] = req.state;
    // res.json(req.user);

    var user_info = {
      uid: req.id,
      state: req.state,
      zip: req.zip,
      email: req.email,
      username: req.username}
    console.log('UserInfo: '+user_info)
    // res.json({
    //   email: req.user.email,
    //   state: req.user.state,
    //   zip: req.user.zip,
    //   id: req.user.uid
    // });
    // console.log(res.json);
     res.send(user_info);
    // console.log(dbUser);
    console.log(req.session.cookie);
    // return res.redirect('../api/billtrack50/billsJson.js')
  });
  //app.post("/api/login/", passport.authenticate("local"), function(req,res) {
  // app.post("/api/login/", function(req, res, next) {
  //   passport.authenticate("local", function(err, user, info) {
  //     if (err) {
  //       return next(err);
  //     }
  //     if (!user) {
  //       return res.redirect("/login");
  //     }
  //     req.login(user, function(err) {
  //       if (err) {
  //         return next(err);
  //       }
  //     });
  //     console.log(req.session);
  //     return res.redirect("/bills/all/state=:user.State");
  //     res.send(req.session);
  //     // successFlash: 'Welcome!',
  //     // failureFlash: 'Invalid username or password.',
  //     // failureRedirect: '/login'
  //   });
  // });
 

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
      // console.log(res);
      let user_token = req.cookies['user_info'];
      if (user_token) {
        // token already set for this user
      } else {
        res.cookie('userid', req.user.uid);
        res.cookie('state', req.user.state);
        res.cookie('zip', req.user.zip);
        res.cookie('username',req.user.username);
        res.send('Cookies Set');
      }
      res.json({
        id: req.user.uid,
        state: req.user.state,
        zip: req.user.zip,
        username: req.user.username
      });
      console.log("from user_data" + req.user.uid);
    }
  });
};
