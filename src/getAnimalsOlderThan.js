const { species } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => animal.includes(specie.name));
  return findAnimal.residents.every((idade) => idade.age >= age);
  // percorre as especies e verifica se o o nome da especie é igual/incluso ao passado pra função, depois verifica dentro de toda aquela especie achada, se a idade passada na função é >= a todos os animais daquela especie // seu código aqui
}

console.log(getAnimalsOlderThan('lions', 7));

module.exports = getAnimalsOlderThan;
