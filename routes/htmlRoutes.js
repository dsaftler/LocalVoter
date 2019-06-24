module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("login");
  });

  app.get("/bills", function(req, res) {
    res.render("loadbills");
  });
};
