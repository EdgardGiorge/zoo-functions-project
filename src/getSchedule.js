const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// ref. mentorias 10/01/22 das 18:00 com Fernando Ribeiro e Yuri em 13/01/22

const horaAgenda = {};
const diaSemana = Object.keys(hours); // Apenas dias da semana
const hora = Object.values(hours); // Apenas horas da agenda
const especie = species.map((elem) => elem.name); // Array de todos os animais

function exibidos(date) {
  const dataAnimal = species.filter((elem) => elem.availability.includes(date));
  return dataAnimal.map((elem) => elem.name);
} // Irá mostrar os animais exibidos no dia prenenchendo a chave exhibition. O filtra separará as espécoes exibidas no dia na sequencia o map monta um array com o nome dos animais.

function horario() { //
  diaSemana.forEach((dado, index) => {
    horaAgenda[diaSemana[index]] = {
      officeHour: `Open from ${hora[index].open}am until ${hora[index].close}pm`,
      exhibition: exibidos(diaSemana[index]),
    };
  }); // função horário nesta primeira etapa cria um objeto com o nome da semana + 'officeHour' e 'exhibition', nela é inserida o valor da chave com os horarios da semana. Irá passar pra função exibidos o dia com o array dos animais para aquela data exibidos!
  hora.forEach((dado, index) => {
    if (dado.open === 0) {
      horaAgenda[diaSemana[index]] = {
        officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  }); // Esta parte verifica os dias que não irá funcionar. Tem que conter no objeto o dia de fechamento, se a chave open for = 0
  return horaAgenda;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return horario();
  if (diaSemana.includes(scheduleTarget)) return { [scheduleTarget]: horaAgenda[scheduleTarget] };
  if (especie.includes(scheduleTarget)) {
    return species.find((elem) => elem.name === scheduleTarget).availability;
  }
  return horario(); // função que alimenta o objeto horaAgenda(um objeto com o dia, hora e animais disponíveis). Caso os parâmetros não seja um animal e dia, retorna um objeto com os horários do dia e os animais em exibição.
} // if 1 = Se não tiver nada na entrada da função, retorna a horaAgenda. if 2 = se for passado parâmetro dia retorna a horaAgenda. if 3 = ao receber uma especie um array com a data que a respectiva espécie esta sendo exibida // seu código aqui

console.log(getSchedule('penguins'));

module.exports = getSchedule;
