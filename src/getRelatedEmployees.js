const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employ) => employ.managers.includes(id)); // retorna true se o id passado é de um gerente // seu código aqui
  // console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const objEmp = employees.filter((man) => man.managers.includes(managerId));
    return objEmp.map((employ) => `${employ.firstName} ${employ.lastName}`);// Cria um novo array de string com as mesmas quantidades dos gerentes existentes // seu código aqui
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
