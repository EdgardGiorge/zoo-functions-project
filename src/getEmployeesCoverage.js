const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmploy = employees.map((employ) => ({
  id: employ.id,
  fullName: `${employ.firstName} ${employ.lastName}`,
})); // Retorna array de objetos com id, nome e sobrenome do empregado pela propriedade id map pra trazer a mesma quantidade de empregados
// console.log(getEmploy);

const getSpecie = employees.map(({ responsibleFor }) => responsibleFor); // cria um array com os id's dos animeis em ordem de responsável (o primeiro array é de responsabilidade do primeiro empregado
// console.log(getSpecie);

for (let index = 0; index < getSpecie.length; index += 1) {
  const arr = species.filter((emp) => getSpecie[index].includes(emp.id));
  // console.log(arr);
  getEmploy[index].species = arr.map(({ name }) => name);
  getEmploy[index].locations = arr.map(({ location }) => location);
} // for irá percorrer todos os id's dos animais em ordem de rsponsabilidade do empregado. A const arr é o filtro de um array contendo todos os objetos com todos os dados dos animais(se o id dos objetos existirem/verdadeiros), obedecendo a ordem de responsabilidade do empregado. A cada interação do for, cria-se um novo objeto(com o map) inserindo o nome do animal na propriedade specie e locations em location na função getEmploy que já contém o id e fullName dos empregados. Sendo, forma-se um array com objetos com as seguintes informações: id: do empregado, fullName, species e locations
// console.log(getEmploy);

function getEmployeesCoverage(objOptions) {
  if (!objOptions) return getEmploy; // Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias;
  const findName = getEmploy.find((elem) => elem.fullName.includes(objOptions.name)); //
  const findId = getEmploy.find((elem) => elem.id === objOptions.id); // Busca os dados se o id dado no objOptions.id corresponder ao elem.id recebe o objeto correspondente
  if (findName !== undefined) return findName; // Se o objeto de opções tiver a propriedade name, retorna somente a pessoa correspondente;
  if (findId !== undefined) return findId; // Se o objeto de opções tiver a propriedade id, retorna somente a pessoa correspondente;
  throw new Error('Informações inválidas'); // Caso não haja nenhuma pessoa com o nome ou id especificados deverá ser lançado um error.
} // seu código aqui
console.log(getEmployeesCoverage({ name: 'Spry' }));

module.exports = getEmployeesCoverage;
