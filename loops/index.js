const nameList = ["Ruan", "Gabriel", "Carla", "Thiago", "Matheus"];

/* Aqui estão algumas maneiras de decorrer uma lista de nomes ou qualquer outras listas, utilizando: for, for in, for of, forEach, do while, while, map */

// FOR -> Cria variável de countrole dentro do escopo, indo incrementando eu decrementando, é passado uma condicional que se der true continua o fluxo.
console.log("[for]");
for (let i = 0; i < nameList.length; i++) {
  console.log(nameList[i]);
}
console.log("-----------------------------------------");

// FOR IN -> é criado uma váriavel, onde a cada iteração é atribuido o valor do index do item da lista.
console.log("[for in]");
for (const name in nameList) {
  console.log(nameList[name]);
}
console.log("-----------------------------------------");

// FOR OF -> é criado uma váriavel, onde a cada iteração é atribuido o valor do item da lista.
console.log("[for of]");
for (const name of nameList) {
  console.log(name);
}
console.log("-----------------------------------------");

// DO WHILE -> é feito primeiro e depois é validado a váriavel de controle, seguindo ou não com a iteração.
console.log("[do while]");
let whileCounter = 0;
do {
  console.log(nameList[whileCounter]);
  whileCounter++;
} while (whileCounter < nameList.length);

console.log("-----------------------------------------");

// While -> validado a váriavel de controle, seguindo ou não com a iteração.
console.log("[while]");
let doWhileCounter = 0;
while (doWhileCounter < nameList.length) {
  console.log(nameList[doWhileCounter]);
  doWhileCounter++;
}
console.log("-----------------------------------------");

// FOR EACH -> método do array que recebe um callback, onde o parâmetro é cada item da lista.
console.log("[forEach]");
nameList.forEach((name) => console.log(name));
console.log("-----------------------------------------");

// MAP -> método do array que recebe um callback, onde o parâmetro é cada item da lista.
console.log("[map]");
nameList.map((name) => console.log(name));
console.log("-----------------------------------------");
