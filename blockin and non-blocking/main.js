var fs = require('fs');

// blocking wait / blocks until reads the file and proceeds...
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("Program Ended");

//non-blocking / do not wait for file reading and etc proceeds...
fs.readFile('input.txt', function(err, data){
  if(err){
    return console.error(err);
  }
  console.log(data.toString());
});

console.log("Program Ended");
