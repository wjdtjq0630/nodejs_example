var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');
var writerStream2 = fs.createWriteStream('output2.txt')
//input.txt 복사 output2.txt 생성 후 내용 추가/변경
readerStream.pipe(writerStream);
readerStream.pipe(writerStream2);

console.log('Program Ended');
