const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// ref. Mentoria Ronald. Mentoria Yuri. Grupo de estudos com Eric, Leonardo Vogel, Yuri e Brabara. Exercícios do course.

function sexOk(name, sexo, sex) {
  if (sex === undefined) { return name; }
  if (sex === sexo) { return name; }
} // verifica se foi dado o parâmetro sex na entrada da função pra auxiliar a função searchBySex

function searchBySex(object, sorted, elem, sex, chave) {
  const animal = {};
  if (sorted === undefined) {
    animal[elem.name] = elem.residents.map(({ name, sex: sexo }) =>
      sexOk(name, sexo, sex)).filter((el) => el);
  } else {
    animal[elem.name] = elem.residents.map(({ name, sex: sexo }) =>
      sexOk(name, sexo, sex)).sort().filter((el) => el);
  }
  object[chave].push(animal);
} // serchBySex, busca animais por sexo, ou por espécie, podem ser de forma ordenada ou não. // Desestrutura o residents pra ter as espècies. Caso, não precise ser ordenado, cria um objeto com os animais caso sexo seja definido ou não, traz apenas os nomes.

function infoSortAndSex(sorted, sex) {
  const local = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((elem) => {
    Object.keys(local).forEach((chave) => {
      if (elem.location === chave) { return searchBySex(local, sorted, elem, sex, chave); }
    });
  });
  return local;
} // Caso a entrada contenha os parâmetros sex e sorted. Dado um array com as localzações vazio, depois é criado a localização da iteração com a localização + o nome da espécie e valor da função searchBySex

function localAnimal() {
  const NE = species.filter((elem) => elem.location === 'NE').map((elem) => elem.name);
  const NW = species.filter((elem) => elem.location === 'NW').map((elem) => elem.name);
  const SE = species.filter((elem) => elem.location === 'SE').map((elem) => elem.name);
  const SW = species.filter((elem) => elem.location === 'SW').map((elem) => elem.name);
  return { NE, NW, SE, SW };
} // sem parâmetros, retorna animais categorizados por localização, as constantes irão retornar local e nome dos animais distribuidos por localização

function getAnimalMap(option = {}) {
  if (option.includeNames === undefined) {
    return localAnimal();
  } // seu código aqui
  return infoSortAndSex(option.sorted, option.sex);
}

console.log(getAnimalMap({ sex: 'female', sorted: true }));

module.exports = getAnimalMap;
