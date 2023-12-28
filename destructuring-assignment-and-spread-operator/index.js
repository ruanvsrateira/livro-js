/* destructuring assignment = é uma syntaxe utilizado para criar uma variável que o nome se associa a propriedade assim atribuindo a variável o valor do atributo com o mesmo nome */
const user = { name: "ruan", age: 19 };
const { name, age } = user;
// é possível usar também para criar um objeto que com o nome da váriavel que é pegado o valor e é criado a propriedade com o nome da variável e o valor com o valor da variável
console.log({ name, age });

/* spread operator = operador representado pela (...), é usado para fazer uma pulverização ou cópia dos dados de dentro de um array ou object. */
const userCopy = { ...user };
console.log({ userCopy });
