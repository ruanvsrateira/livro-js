const set = new Set();

// O método add() adiciona valor ao set
set.add("10");
set.add("22");
set.add("33");
// O método delete() remove valor do set
set.delete("10");

// O método valida se há o valor passado no parâmetro do método has(), no set
console.log({ validation: "set has value 33?", returns: set.has("33") });

// A propriedade size retorna o tamanho do set
console.log({ setSize: set.size });

// o método values() retorna todos os valores do set
console.log({ setValues: set.values() });

// o método entries retorna todas as chaves e valores do set
console.log({ setEntries: set.entries() });

// o método keys retorna todas as chaves presente no set
console.log({ setKeys: set.keys() });

// o método clear apaga todos os dados do set
set.clear();

/* O set é muito utilizado para remover valores repetidos, já que na estrutura do set não é possível adicionar valores iguais */
const arrayReplyed = [1, 1, 1, 1, 2];
const arrayNotReplyed = [...new Set(arrayReplyed)];
console.log({ arrayNotReplyed });
