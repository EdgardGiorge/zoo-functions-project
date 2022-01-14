const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {}); // Caso o animal não seja definido como parâmetro, o reduce entrega um objeto que irá acumular os dados a cada interação no acc: o name corrente da especie e o tamanho do resident.lenght(corresponde ao tamanho do array que se resulta na quantidade de animais da especie analizada). Obs. reduce iniciando como objeto vazio {}.
  }
  const amount = species.find((anim) => animal.specie === anim.name); // Procura a espécie informada na entrada da função
  if (animal.sex) {
    return amount.residents.filter(({ sex }) => sex === animal.sex).length;
  }
  return amount.residents.length; // seu código aqui
} // Se a entrada da função existir um parâmetro sex, filtra os animais de acordo com o sex se for igual ao sex da entrada e o .length ja traz o tamanho do array e por conseqência a quantidade de animais. Caso contrário, retorna a quantidade da especie desejada.

console.log(countAnimals({ specie: 'penguins', sex: 'female' }));

module.exports = countAnimals;
