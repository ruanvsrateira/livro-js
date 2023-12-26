let listNames = ["João", "Caique", "Ronaldo", "Fabio"];

// A partir do index 0 remove 2 elementos e adiciona o elemento renan
listNames.splice(0, 2, "renan");

// Remove o elemento do index 2 que é o Fabio
listNames.splice(2, 1);
module.exports = { listNamesSpliced: listNames };
