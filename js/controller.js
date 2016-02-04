var express = require('express');
var app = express();
var fs = require('fs');
var data = fs.readFileSync('./data/news.json','utf-8');
var toEnter = JSON.parse(data);

app.get('/data',function(req,res){
  res.send(toEnter);
})

app.use(express.static('./public'))


module.exports = app;
