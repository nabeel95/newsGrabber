var http = require('http');
var controller = require('./js/controller');
var server = http.createServer(controller);
server.listen(3000);
console.log("server started");
