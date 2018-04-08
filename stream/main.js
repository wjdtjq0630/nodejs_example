console.log('Reading to stream');
var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf8');

readerStream.on('data',function(chunk){
  data += chunk;
});
readerStream.on('end',function(){
  console.log(data);
})
readerStream.on('error',function(err){
  console.log(err.stack);
});

console.log('Program Ended');

//writing to Stream
console.log('\nWriting to Stream');
var date = new Date();
var y = date.getYear()-100;
var m = date.getMonth();
var d = date.getDate();
data = 'Simply Easy Learning\n(' + y + '.' + m + '.' + d + ')';

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'utf8');

writerStream.end();

writerStream.on('finish', function(){
  console.log('Write completed');
});
writerStream.on('error', function(err){
  console.log(err.stack);
});

console.log('Program Ended');
