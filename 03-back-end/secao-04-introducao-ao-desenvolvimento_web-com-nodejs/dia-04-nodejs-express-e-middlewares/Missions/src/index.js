const readline = require('readline-sync');
const { writeNewMissionData } = require('./utils/fsUtils');

async function main() {
    const name = readline.question('Qual o nome da missão? ');
    const year = readline.questionInt('Qual o ano da missão? ');
    const country = readline.question('Qual o país da missão? ');
    const destination = readline.question('Qual o destino da missão? ');

    const newMission = { name, year, country, destination };
    writeNewMissionData(newMission);
    console.log('Missão registrada!');
}

main();