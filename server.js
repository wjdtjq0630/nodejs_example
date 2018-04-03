var http = require('http');
var fs= require('fs');
var url = require('url');

http.createServer(function (req, res){
  var pathname = url.parse(req.url).pathname;

  console.log("Request for"+pathname+"received.");

  if(pathname == ""){
    pathname = "/index.html";
  }
  fs.readFile(pathname.substr(1), function(err, data){
    if(err){
      console.log(err);
      res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    } else{
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

      res.write(data.toString());
    }
    res.end();
  });
}).listen(8081);
console.log('Server running at http:localhost:8081/');
