const { species, employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');
// ref. codereview do Hugo e mentoria do Yuri do dia 13/01/22 ás 22:15
function getOldestFromFirstSpecies(id) {
  const [oldAnimal] = employees.find(({ id: idEmp }) =>
    idEmp === id).responsibleFor;// seu código aqui
  const [animal] = species.find(({ id: idAnimal }) =>
    idAnimal === oldAnimal).residents.sort((a, b) => b.age - a.age)
    .map(({ name, sex, age }) => [name, sex, age]);
  return animal;
} // Armazena id da primeira especie que achar(employees.find), que o empregado é responsável. o segundo find busca as informações do animais que este funcionário gerencia. .residents.sort ordeba em ordem do maior para o menor, deixando asiim o primeiro animal mais velho na primeira posição, o resultado do sort será enviado pro map pra gerar um array com a ordem de dados pedida no projeto pra saída da função!

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
