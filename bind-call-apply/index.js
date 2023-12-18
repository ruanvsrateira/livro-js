// Esses args recebidos são passados junto com o método bind, aplly ou call
function funcao(arg1, arg2) {
  console.log(this);
  console.log(arg1, arg2);
}

// Crio uma constante contendo o mesmo método funcao, só que altero o this para o valor { msg: "hello world!" }, é passado os args por sequencia
const bindFuncao = funcao.bind({ msg: "hello world!" }, 1, 2);
bindFuncao();

// modifica o this e já executa a função com o escopo this modificado usando o método apply, é passado os args por um array
funcao.apply({ msg: "hello world!" }, ["nome", "ruan"]);

// modifica o this e já executa a função com o escopo this modificado usando o método call, é passado os args por sequencia
funcao.call({ msg: "hello world" }, "nome", "ruan");
