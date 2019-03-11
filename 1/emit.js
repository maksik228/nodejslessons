const Emitter = require("events");

let emitter = new Emitter();
let eventName = "greet";
emitter.on(eventName, function(){
    console.log(eventName);
});

emitter.on(eventName, function(){
    console.log("Привет!");
});

emitter.emit(eventName);
