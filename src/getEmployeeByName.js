const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  } // caso a função não tenha entrada, retorna um objeto vazio
  const emp = employees.find((employ) =>
    employ.firstName === employeeName || employ.lastName === employeeName);
  return emp; // procura os empregados com o primeiro ou o último nome e retorna todos os dados/objeto do mesmo!
  // seu código aqui
}

console.log(getEmployeeByName('Ola'));

module.exports = getEmployeeByName;
