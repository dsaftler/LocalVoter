var axios = require("axios")
var zipcode = "33602"
var googlAPI = "AIzaSyCbC-q0n1vMIzkpr7k7HvngMZTD9OxrnlQ"
var officials = []




axios.get("https://www.googleapis.com/civicinfo/v2/representatives?address=" + zipcode + "&key=" + googlAPI).then(function (res) {
  for (i = 2; i <= 5; i++) {
    var repName = res.data.officials[i].name;
    var party = res.data.officials[i].party;
    var phones = res.data.officials[i].phones;
    var urls = res.data.officials[i].urls;
    var photoUrl = res.data.officials[i].photoUrl;
    var socialMedia = res.data.officials[i].channels;

    var test2 = res.data.officials[i]
    //    officials.push(test2) 
    officials.push({
      repName,
      party,
      phones,
      urls,
      photoUrl,
      socialMedia
    })
  }
})
module.exports = {
  officials: officials
}