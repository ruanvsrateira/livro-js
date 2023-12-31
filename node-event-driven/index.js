"use strict";

const EventEmitter = require("node:events");
const emitter = new EventEmitter();
const sayHelloWorld = () => console.log("Hello World Everyone!");

/* Listener escutando alguem emitir o sinal "hello world", para então chamar a função say hello world */
emitter.on("hello world", sayHelloWorld);

/* Emitindo o sinal "hello world" */
emitter.emit("hello world");
