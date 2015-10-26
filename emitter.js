var events=require('events');
var eventEmitter=new events.EventEmitter();

eventEmitter.on('connection', function () {
  console.log('someone connected!');
});

var fun1=function(){
	console.log("I'm the first one");
};

var fun2=function(){
	console.log("I'm the second one");
};

var fun3=function(){
	console.log("I'm the third one");
};







eventEmitter.on('supportsMoreThanOne', fun1);
eventEmitter.on('supportsMoreThanOne', fun2);
eventEmitter.on('supportsMoreThanOne', fun3);



eventEmitter.once('onlyonce',function(){
	console.log("i'll appear only once");
});

eventEmitter.addListener('doIt',function(){
	console.log("god knows what will happen");
});

var callback = function(something) {
  console.log('something connected!');
};
// eventEmitter.on('inordertoRemove', callback);

 eventEmitter.removeListener('inordertoRemove', callback);

eventEmitter.emit('connection');
eventEmitter.emit('connection');
eventEmitter.emit('onlyonce');
eventEmitter.emit('onlyonce');
eventEmitter.emit('doIt');
eventEmitter.emit('doIt');
eventEmitter.emit('inordertoRemove');
eventEmitter.emit('supportsMoreThanOne');
