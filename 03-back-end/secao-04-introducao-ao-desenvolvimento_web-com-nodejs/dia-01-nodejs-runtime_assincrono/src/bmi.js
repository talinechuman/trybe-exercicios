const readline = require('readline-sync');

// const weight = 80;
// const height = 1.69;

function imc (weight, height) {
    const formImc = (weight/(height**2));
    return formImc;
}

function main () {
    const weight = readline.questionFloat('Qual o peso em kg? ');
    const height = readline.questionFloat('Qual a altuta em metros? ')

    const formImc = imc(weight, height);
    console.log(`IMC: ${formImc.toFixed(2)}`);

    if (formImc < 18.5) {
        console.log('Status: Underweight (thin)');
        return;
    }
    
    if (formImc >= 18.5 && formImc < 25) {
        console.log('Status: Normal weight');
        return;
    }
    
    if (formImc >= 25 && formImc < 29.9) {
        console.log('Acima do peso (sobrepeso)');
        return;
    }

    if (formImc >= 30 && formImc < 34.9) {
        console.log('Obesidade grau I');
        return;
    }

    if (formImc >= 35 && formImc < 39.9) {
        console.log('Obesidade grau II');
        return;
    }

    if (formImc >= 40) {
        console.log('Obesidade graus III e IV');
        return;
    }
}

main();