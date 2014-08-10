var express = require("express");
var app = express();
var server = app.listen(3000);
var engine = app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs')

app.get("/", function(req, res){
  res.render("index.ejs")
});
