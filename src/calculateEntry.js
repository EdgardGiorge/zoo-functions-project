const data = require('../data/zoo_data');

// ref. codereview Hugo 10/01/22 as 19:48 (Thais Cardoso)
function countEntrants(entrants) {
  const countVisitors = {
    adult: entrants.reduce((acc, { age }) => (age >= 18 && age < 50 ? acc + 1 : acc), 0),
    child: entrants.reduce((acc, { age }) => (age < 18 ? acc + 1 : acc), 0),
    senior: entrants.reduce((acc, { age }) => (age >= 50 ? acc + 1 : acc), 0),
  }; // Separa os visitantes baseado na faixa de idade, compara a idade da entrada e acumula no objeto correspondente (começa em 0) e retorna quantidade de pessoas de cada faixa
  return countVisitors;// seu código aqui
}

function calculateEntry(entrants) {
  if (Array.isArray(entrants)) { // ref. refatoração codereview, verifica se a entrada é um array
    const { prices } = data; // destructuring
    const { child, adult, senior } = countEntrants(entrants);
    return (prices.child * child) + (prices.adult * adult) + (prices.senior * senior);
  } // quantidade de visitantes e faixa etária de cada um, multiplica pelo valor prices.(faixa) e deverá retornar o valor total a ser cobrado.
  return 0;// Caso o parâmetro não seja um array, retorna 0// seu código aqui
}

console.log(calculateEntry([{ name: 'Giorge', age: 43 }, { name: 'Sueli', age: 73 }]));

module.exports = { calculateEntry, countEntrants };
