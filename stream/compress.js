var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip()) //creates a gzip object
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log('File Compressed.');
