var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var app = express();

MongoClient.connect("mongodb://localhost:27017/zeta", function(err, db) {

});

app.use(express.static(__dirname + "/public"));

app.listen(3000);

console.log("Express app running on port 3000");
console.log("http://localhost:3000");

module.exports = app;