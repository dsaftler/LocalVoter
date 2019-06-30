//imported API calls
var exportRepsInfo = require("../api/billtrack50/representativesJson");
var exportBillInfo = require("../api/billtrack50/billsJson");
var selectedBillInfo = require("../api/billtrack50/billSelectJson")

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

  app.get("/bills/all", function(req, res) {
    let state = "fl"
    let billsInfo = exportBillInfo(state)
    billsInfo.then(function(allBillInfo) {
      res.render("bill-display", { billsData: allBillInfo })
    });
  });

  app.get("/bills/active", function(req, res) {
    var billsInfoActive = exportBillInfo.billsInfoActive;
    res.render("bill-display", { billsData: billsInfoActive });
  });

  app.get("/bills/bill=:billNumber", function(req, res) {
    let billData = selectedBillInfo(req.params.billNumber);
    billData.then(function(selectedBillData) {
      res.render("bill-moreinfo", { selectedBillData } )
    })
  });

  app.get("/representatives", function(req, res) {
    var officials = exportRepsInfo.officials;
    res.render("reps", { officialsData: officials });
  });
};
