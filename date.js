var http = require('http');

var dt = Date();

http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end("The date and time are currently:" + dt);
}).listen(8080);
