const { listNamesReverse } = require("./reverse");
const { listNamesSorted } = require("./sort");
const { listNamesSpliced } = require("./splice");

// Array Original - ["João", "Caique", "Ronaldo", "Fabio"]

// O método sort ordena o array em ordem
console.log({ method: "sort", values: listNamesSorted });

// o método reverse inverte os valores do array
console.log({ method: "reverse", values: listNamesReverse });

// o método splice pode fazer várias coisas, podendo cortar o array e adicionar valores
console.log({ method: "splice", values: listNamesSpliced });
