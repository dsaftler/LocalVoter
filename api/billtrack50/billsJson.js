require("dotenv").config();
// eslint-disable-next-line no-var
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-var
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-var
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-var
// eslint-disable-next-line no-unused-vars
let keys = require("../../keys.js");
// eslint-disable-next-line no-unused-vars
let db = require("../../models");
// eslint-disable-next-line no-unused-vars
let passport = require("passport");
let axios = require("axios");
// var Axios = require("axios")
// var axios = new Axios(axios.defaults.headers.common[keys.billtrack50]);
axios.defaults.headers.common.Authorization =
  "apikey 0875949d-d6ea-424c-84ae-9d47c50ea371";

// app.get("/api/user_data", function (req, res) {
//    console.log("State from app.get bills/all: " + req.user.state);
// });
module.exports = function(state) {
  // console.log("Req from billsJson: " + req);
  // console.log("Zip from app.get bills/all: " + req.user.zip);
  // console.log("ID from app.get bills/all: " + req.user.id);
  // console.log("Email from app.get bills/all:" + req.user.email);
  let stateCode = state;
  let billsInfo = [];
  // eslint-disable-next-line no-unused-vars
  let billsInfoActive = [];
  // eslint-disable-next-line no-unused-vars
  return new Promise(function(resolve, reject) {
    axios
      .get(
        "https://www.billtrack50.com/BT50Api/2.0/json/Bills?SearchText=n/a&StateCodes=" +
          stateCode
      )
      .then(function(res) {
        // eslint-disable-next-line no-undef
        for (i = 0; i < res.data.Bills.length; i++) {
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let BillID = res.data.Bills[i].BillID;
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let StateBillID = res.data.Bills[i].StateBillID;
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let StateCode = res.data.Bills[i].StateCode;
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let BillName = res.data.Bills[i].BillName;
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let Summary = res.data.Bills[i].Summary;
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let Sponsors = res.data.Bills[i].Sponsors;
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let LastAction = res.data.Bills[i].LastAction;
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let ActionDate = res.data.Bills[i].ActionDate;
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let BillProgress = res.data.Bills[i].BillProgress;
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let OfficialDocument = res.data.Bills[i].OfficialDocument;
          // eslint-disable-next-line no-var
          // eslint-disable-next-line no-undef
          let Created = res.data.Bills[i].Created;

          billsInfo.push({
            BillID,
            StateBillID,
            StateCode,
            BillName,
            Summary,
            Sponsors,
            LastAction,
            ActionDate,
            BillProgress,
            OfficialDocument,
            Created
          });
        }
      })
      // eslint-disable-next-line no-unused-vars
      .then(function(res) {
        resolve(billsInfo);
      })
      .catch(function(err) {
        console.log(err);
      });
  });
};
