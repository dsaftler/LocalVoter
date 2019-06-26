module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("home")
  });

  app.get("signup", function(req, res) {
    res.render("signup");
  });

  app.get("login", function(req, res) {
    res.render("login");
  })

  app.get("/bills", function(req, res) {
    res.render("bill-display");
  });
};
