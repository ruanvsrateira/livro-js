const map = new Map();

// Cria chave com valor na estrutura map, usando o método set()
map.set("name", "Ruan");
map.set("age", 19);
map.set("unintilized-key", null);

// Deleta chave passada como parâmetro do método delete()
map.delete("unintilized-key");

// valida se há alguma chave com o nome passado no método has()
console.log({ validation: "has key 'name'?", return: map.has("name") });

// Mostra todas as chaves do map
console.log({ keysOfMap: map.keys() });

// retorno tamanho do map
console.log({ mapSize: map.size });

// retorna valores do map
console.log({ mapValues: map.values() });

// retorna todas as chaves e todo os valores do map
console.log({ mapEntries: map.entries() });

// o método clear apaga todos os valores do map
map.clear();
