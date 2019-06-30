var exportRepsInfo = require("./representativesJson")
var exportBillInfo = require("./billsJson");
var express = require("express")
var handlebars = require("express-handlebars");
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var PORT = process.env.PORT || 8080;


app.get("/", function(req, res){
    var billsInfo = exportBillInfo.billsInfo
       // res.json(billsInfo)
        res.render("index", {billsInfo})
   
   })
app.get("/active", function(req, res){
    var billsInfoActive = exportBillInfo.billsInfoActive
    res.render("index", {billsInfoActive})
    })

app.get("/contactPage", function(req, res){
    var officials = exportRepsInfo.officials
    res.render("reps", {officials})
    //var billsInfoActive = exportBillInfo.billsInfoActive
    //res.json(officials)
    })

    


app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
    
})





