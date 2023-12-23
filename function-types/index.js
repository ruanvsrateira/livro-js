// IIFE (Immediately Invoked Function) é uma função que se auto se invoca podendo ser uma função sem nome.
(function (type) {
  console.log({ type });
})("Immediately Invoked Function");

// Normal function é uma função comum, onde se é dado um nome a função podendo passar parâmetros podendo ser chamada em seu escopo.
function normalFunction(type) {
  console.log({ type });
}
normalFunction("Normal function");

// Arrow function é uma maneira mais interessante de se declarar uma função, também podendo passar parâmetros.
const arrowFunction = (type) => console.log({ type });
arrowFunction("Arrow function");
