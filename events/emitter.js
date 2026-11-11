const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("userRegistered", (data) => {
  console.log("userRegistered:", data.username, data.email);
});

emitter.on("userLoggedIn", (data) => {
  console.log("userLoggedIn:", data.username);
});

emitter.on("messageSent", (data) => {
  console.log("messageSent:", data.username, "->", data.message);
});

module.exports = emitter;

