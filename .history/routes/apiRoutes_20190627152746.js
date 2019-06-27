// testing route for ajax
module.exports = app => {

  app.post("/api/signup", (req, res) => {
    let pwd = SHA2(req.body.password, 256);
    db.User.create({
      username: req.body.username,
      password: pwd,
      state: req.body.state,
      zip: req.body.zip
    }).then(function(dbUser) {
      res.json(dbUser);
    });
    // console.log(req.body);
  });

  app.post("/api/login", (req, res) => {
    let pwd = SHA2(req.body.password, 256);
    db.User.findAll({
      where: {
        username: req.body.username,  
        password: pwd}
    }).then(function(dbUser) {
      res.json(dbUser);
    });
    // console.log(req.body);
  });
};
