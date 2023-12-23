// O Escopo em bloco, é uma área onde as váriaveis estão acessíveis dentro do bloco, mensurado através de {}.
{
  let variableScopeInBlock = 10;
  console.log({ scope: "block", value: variableScopeInBlock });
}

// O Escopo de função, é uma área onde se pode acessar as variáveis de um escopo acima, e fora do escopo não é possível acessar as variáveis de dentro da função.
let acessibleVariableInScopeFunction = "My name is Ruan";

(function () {
  let variableScopeInFunction = Symbol("function");
  console.log({ scope: "function", value: acessibleVariableInScopeFunction });
  console.log({ scope: "function", value: variableScopeInFunction });
})();

// Uma variável constante não se pode mudar sua referência na memória, nem alterar totalmente seu valor.
const constantVariable = 12;
console.log({ type: "constant", value: constantVariable });
