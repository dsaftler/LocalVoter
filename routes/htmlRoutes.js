var exportRepsInfo = require("../api/billtrack50/representativesJson")
var exportBillInfo = require("../api/billtrack50/billsJson");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("home");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/bills", function(req, res) {
    var billsInfo = exportBillInfo.billsInfo
    // res.json(billsInfo)
    res.render("index", {billsData: billsInfo})
  });
};
