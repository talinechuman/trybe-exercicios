const fs = require('fs').promises;

async function readAll() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({id, name}) => `${id} - ${name}`  )

    strings.forEach((string) => console.log(string));
}

async function getSimpsonById(id) {
    const fileContent = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(fileContent);
    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
    if(!chosenSimpson) {
        throw new Error('id não encontrado');
    }

    return chosenSimpson;

}

async function createSimpsonFamily() {
    const fileContent = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(fileContent);

    const newArray = simpsons.filter((simpson) => simpson.id <= 4)

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray))
    return console.log(newArray);
}

async function addSimpsonFamily() {
    const fileContent = await fs.readFile('./simpsonFamily.json');
    const simpsons = JSON.parse(fileContent);
    simpsons.push({ id: '8', name: 'Nelson Muntz' });

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons))
}

async function replaceSimpsonFamily() {
    const fileContent = await fs.readFile('./simpsonFamily.json');
    const simpsons = JSON.parse(fileContent);

    // Filtramos o array para remover o personagem Nelson
    const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

    simpsonsWithoutNelson.push({ id: '15', name: 'Maggie Simpson' });

    // Criamos um novo Array contendo a personagem Maggie
    // const simpsonsWithMaggie = simpsonsWithoutNelson
    // .concat([{ id: '15', name: 'Maggie Simpson' }]);

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsWithoutNelson))
}



function main() {
    // readAll();
    // getSimpsonById(4).then((simpson) => console.log(simpson));
    // filterSimpsonById()
    // createSimpsonFamily()
    // addSimpsonFamily();
    replaceSimpsonFamily()
}

main();