var axios = require("axios")
axios.defaults.headers.common['Authorization'] = "apikey 0875949d-d6ea-424c-84ae-9d47c50ea371";

module.exports = function(selectedBillID) {
  return new Promise(function(resolve, reject) {
    axios.get(`https://www.billtrack50.com/BT50Api/2.0/json/Bills/${selectedBillID}`)
      .then(function(res, err) {
        if (err) throw err;

        //to send to front end
        let bill = res.data.Bill;
        let selectedBillData = [];

        var BillID = bill.BillID
        var StateBillID = bill.StateBillID
        var StateCode = bill.StateCode
        var BillName = bill.BillName
        var Summary = bill.Summary
        var Sponsors = bill.Sponsors
        var LastAction = bill.LastAction
        var ActionDate = bill.ActionDate
        var BillProgress = bill.BillProgress
        var OfficialDocument = bill.OfficialDocument
        var Created = bill.Created

        selectedBillData.push({
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

        resolve(selectedBillData);
      })
    .catch(function (err, res) {
      console.log(err)
    });
  });
};