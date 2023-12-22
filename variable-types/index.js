// A variável do tipo boolean pode armazenar os valor true (verdadeiro) ou false (falso).
let variableBoolean = true;
console.log({ variableBoolean: typeof variableBoolean });

// A variável do tipo number armazena números em geral.
let variableNumber = 12;
console.log({ variableNumber: typeof variableNumber });

// A variável do tipo bigint armazena números enormes, números que o tipo number não suportaria.
let variableBigint = 1222222n;
console.log({ variableBigint: typeof variableBigint });

// A variável do tipo string armazena textos.
let variableString = "String";
console.log({ variableString: typeof variableString });

// A variável do tipo symbol é um tipo onde o valor é único não sendo igual a nenhum outro.
let variableSymble = Symbol("Symbol");
console.log({ variableSymble: typeof variableSymble });

// A variável quando não se é atribuido valor, ela recebe o tipo undefined, ou seja, não definido.
let variableUndefined;
console.log({ variableUndefined: typeof variableUndefined });

// A variável do tipo é quando a variável carrega o valor nulo, o tipo dela é mostrado como object, mas em si é null.
let variableNull = null;
console.log({ variableNull: typeof variableNull });

// A variável do tipo object é um tipo que carrega como valor uma estrutura de objeto.
let variableObject = { type: "object" };
console.log({ variableObject: typeof variableObject });

// A variável do tipo function é quando a variável carrega uma função ou método em si.
let variableFunction = function () {};
console.log({ variableFunction: typeof variableFunction });
