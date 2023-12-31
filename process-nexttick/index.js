"use strict";

function f1() {
  console.log("[Function 1]");
  /* 
    A função process.nextTick() tem a função de dizer para a Engine do JS, que após de terminar o processo atual deverá chamar as funções passadas dentro da função, sem enfileiras. 
    Esta é uma maneira de realizar a programação assincrona 
  */
  process.nextTick(f2);
}

function f2() {
  console.log("[Function 2]");
}

f1();
