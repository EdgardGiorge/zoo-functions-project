const { species } = require('../data/zoo_data');// desestrutura só species
// const data = require('../data/zoo_data');

// ref. Mentoria técnica Ronald e refatoração dado o exemplo do Hugo do requisito1
function getSpeciesByIds(...ids) { // ... pra receber mais de um parâmetro dentro de um array
  return species.filter((specie) => ids.includes(specie.id)); // filtra os ids das especies passadas como parâmetro da função, verifica se o id passado está incluso nas especies, e retorna o array com todos os objetos/dados da especie, caso não seja passado nenhum id ou o id passado não seja encontrado, o filter sempre retorna um array (neste caso vazio) // seu código aqui Giorge
}

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
