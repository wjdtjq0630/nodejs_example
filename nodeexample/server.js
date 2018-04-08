var http = require('http');

http.createServer(function(request, response){
  console.log('서버 시작');
  response.writeHead(200, {'Content-Type': 'text/plain charset=utf-8'});
  response.end('Hello World\n');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
