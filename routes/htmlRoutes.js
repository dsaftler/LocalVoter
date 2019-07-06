// imported API calls
// eslint-disable-next-line no-var
var exportRepsInfo = require("../api/billtrack50/representativesJson");
// eslint-disable-next-line no-var
var exportBillInfo = require("../api/billtrack50/billsJson");
// eslint-disable-next-line no-var
var selectedBillInfo = require("../api/billtrack50/billSelectJson");

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
    console.log("Req from app.get bills/all: " + req);
    console.log("State from app.get bills/all: " + req.user.state);
    console.log("Zip from app.get bills/all: " + req.user.zip);
    console.log("ID from app.get bills/all: " + req.user.id);
    console.log("Email from app.get bills/all:" + req.user.email);
    // let state = req.user.state;
    let state = req.user.state;

    let billsInfo = exportBillInfo(state);
    billsInfo.then(function(allBillInfo) {
      res.render("bill-display", { billsData: allBillInfo });
    });
  });

  app.get("/bills/active", function(req, res) {
    let billsInfoActive = exportBillInfo.billsInfoActive;
    res.render("bill-display", { billsData: billsInfoActive });
  });

  app.get("/bills/statecode=:statecode", function(req, res) {
    let billsUserState = exportBillInfo.billsUserState;
    res.render("bill-display", { billsData: billsUserState });
  });

  app.get("/bills/bill=:billNumber", function(req, res) {
    let billData = selectedBillInfo(req.params.billNumber);
    billData.then(function(selectedBillData) {
      res.render("bill-moreinfo", { selectedBillData });
    });
  });

  app.get("/representatives", function(req, res) {
    let officials = exportRepsInfo.officials;
    res.render("reps", { officialsData: officials });
  });
};
