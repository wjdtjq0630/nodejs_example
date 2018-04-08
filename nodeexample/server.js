var http = require('http');
http.createServer((request, response){
  console.log('서버 시작');
}).listen(8080);
