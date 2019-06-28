var axios = require("axios")
axios.defaults.headers.common['Authorization'] = "apikey 0875949d-d6ea-424c-84ae-9d47c50ea371";


var stateCode = "FL"
var billsInfo = []
var billsInfoActive = []
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
      })


      if (BillProgress === "1 - Introduced" || BillProgress === "2 - In Committee" || BillProgress === "3 - Crossed Over" || BillProgress === "4 - Passed") {
        billsInfoActive.push({
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
        })
      }
    }
    //module.exports = { billsInfo: billsInfo };
    //console.log(billsInfo);

  })
  .catch(function (err, res) {
    console.log(err)
  })


module.exports = {
  billsInfo: billsInfo,
  billsInfoActive: billsInfoActive
};