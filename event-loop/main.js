var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
  console.log('connection succesful');

  eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler);

var Hello = function(){
  console.log('Hello World!');
}

eventEmitter.addListener('Hello', Hello);

eventEmitter.on('data_received', function(){
  console.log('data received succesfully.');
});

eventEmitter.emit('connection');

eventEmitter.emit('Hello');

eventEmitter.removeListener('Hello',Hello);
eventEmitter.emit('Hello');

console.log("Program Ended");
