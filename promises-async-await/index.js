"use strict";
/*

  Programação Sincrona -> é um comportamento dos códigos que são executados um em seguida do outro, mantendo uma ordem sincronizada.
*/
function syncProgramming() {
  console.log("[Sync Programming]");
  console.log(1);
  console.log(2);
  console.log(3);
}
syncProgramming();

/*
  Programação Assíncrona -> é um comportamento dentro da programação, cuja os códigos não são executados em ordem, devido que algum comando pode demorar para se terminar
                            tendo que ser utilizados os conceitos de Promises, Async, Await
*/
function asyncProgramming() {
  console.log("[Async Programming]");
  console.log(1);
  // aqui simulo uma resposta que demora 1 segundo para retorna o console.log()
  setTimeout(() => console.log(2), 1000);
  console.log(3);
}
asyncProgramming();

/*
  Promise(Promessa) -> é um tipo  que define que aquele método será asincrono fazendo assim uma promessa, o tipo promise fornece os métodos .then() .catch() .finally()
*/
setTimeout(() => promiseSucessfully(), 1000);

function promiseSucessfully() {
  console.log("[Promise Sucessfully]");
  new Promise((resolve, reject) => {
    //Aqui invoco a função resolve que indica que a promise deu certo e chama o método .then()
    resolve();
  })
    .then(() => console.log("finalizado promise"))
    .catch(() => console.log("throw error"))
    // O finally independente se deu ou não certo a promise o finally() é chamado no final
    .finally(() => {
      console.log("finally!");
      promiseError();
    });
}

function promiseError() {
  console.log("[Promise Error]");
  new Promise((resolve, reject) => {
    //Aqui invoco a função reject() que indica que a promise deu errado e chama o método .catch()
    reject();
  })
    .then(() => console.log("finalizado promise"))
    .catch(() => console.log("throw error"))
    // O finally independente se deu ou não certo a promise o finally() é chamado no final
    .finally(() => {
      console.log("finally!");
      fetchDados();
    });
}

/* 
  Quando definimos o método como asincrono utilizando a palavra async antes de function, podemos utilizar o await antes de uma promise, isso força a espera, 
  e só é dado continuidade no código depois que a promise for resolvida
*/
async function fetchDados() {
  console.log("[async await]");
  const { name } = await fetch("https://swapi.dev/api/people/2").then((res) =>
    res.json()
  );
  console.log({ name });
}
