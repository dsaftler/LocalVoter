//imported API calls
var exportRepsInfo = require("../api/billtrack50/representativesJson");
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
    var billsInfo = exportBillInfo.billsInfo;
    res.render("bill-display", { billsData: billsInfo });
  });

  app.get("/bills/active", function(req, res) {
    var billsInfoActive = exportBillInfo.billsInfoActive;
    res.render("bill-display", { billsData: billsInfoActive });
  });

  app.get("/representatives", function(req, res) {
    var officials = exportRepsInfo.officials;
    res.render("reps", { officialsData: officials });
  });
};
