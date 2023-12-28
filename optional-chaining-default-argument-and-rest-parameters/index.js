/* Optional Chaining -> é utilizado quando você vai utilizar uma propriedade de um parâmetro dentro da função que pode ser undefined */
function optionalChaining(props) {
  return props.user?.name;
}

console.log({
  function: "optional chaining",
  value: optionalChaining({ user: { name: "Ruan" } }),
});

/* Default Argument -> é utilizado para se caso o valor do parâmetro não for passado é atribuido um valor padrão */
function defaultArgument(name = "Ruan") {
  return name;
}

console.log({
  function: "default argument",
  valueDefault: defaultArgument(),
  valueDefined: defaultArgument("Victor"),
});

/* Rest Parameter -> é utilizado para pegar o resto dos parâmetros passado e atribuir a uma variável que se torna um array */
function restParameter(name, ...rest) {
  return {
    name,
    age: rest[0],
    birthDay: rest[1].toLocaleString(),
  };
}

console.log({
  function: "rest parameter",
  values: restParameter("Ruan", 19, new Date("2004-07-29")),
});
