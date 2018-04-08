var buffer1 = new Buffer(256);
console.log("buffer length : " + buffer1.length);

var data = 'string in buffer';
var len = buffer1.write(data);
console.log("Octets written : " + len);
console.log("")
var buffer2 = new Buffer([10, 20, 30, 40, 50]);
