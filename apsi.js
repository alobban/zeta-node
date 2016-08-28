var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
// var MongoClient = require("mongodb").MongoClient;
// var db = MongoClient.connect("mongodb://localhost:27017/zeta");
var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://localhost/zeta');

var Executive = require('./models/executiveModel');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

executiveRouter = require('./routes/executiveRoutes')(Executive);

app.use('/api/executives', executiveRouter);


app.use(express.static(__dirname + "/public"));

app.listen(port, function () {
    console.log("Express app running on port "+port);
    console.log("http://localhost:"+port);
});


module.exports = app;