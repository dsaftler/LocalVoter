let db = require("../../models");
// var express = require(‘express’);
// var app = express();
let passport = require("passport");
var axios = require("axios")
axios.defaults.headers.common['Authorization'] = "apikey 0875949d-d6ea-424c-84ae-9d47c50ea371";
//var state = cookie.parse('state');
// console.dir(req.cookies.name) 
// var get_cookies = function (request) {
//   var cookies = {};
//   request.headers && request.headers.cookie.split(';').forEach(function (cookie) {
//     var parts = cookie.match(/(.*?)=(.*)$/)
//     cookies[parts[1].trim()] = (parts[2] || '').trim();
//   });
//   return cookies;
// };

module.exports = function(state) {
  let stateCode = state;
  let billsInfo = [];
  let billsInfoActive = [];
  
  return new Promise(function(resolve, reject) {
    axios.get("https://www.billtrack50.com/BT50Api/2.0/json/Bills?SearchText=n/a&StateCodes=" + stateCode).then(function (res) {

        for (i = 0; i < res.data.Bills.length; i++) {
          var BillID = res.data.Bills[i].BillID
          var StateBillID = res.data.Bills[i].StateBillID
          var StateCode = res.data.Bills[i].StateCode
          var BillName = res.data.Bills[i].BillName
          var Summary = res.data.Bills[i].Summary
          var Sponsors = res.data.Bills[i].Sponsors
          var LastAction = res.data.Bills[i].LastAction
          var ActionDate = res.data.Bills[i].ActionDate
          var BillProgress = res.data.Bills[i].BillProgress
          var OfficialDocument = res.data.Bills[i].OfficialDocument
          var Created = res.data.Bills[i].Created

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
        };
      }).then(function(res) {
        resolve(billsInfo)
      }).catch(function(err) {
        console.log(err)
      });
    });
};