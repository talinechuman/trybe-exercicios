// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const num1 = 500;;
const num2 = 100;
const num3 = 55;
let maior;

if (num1 > num2 && num1 > num3){
    maior = num1;
} else if (num2 > num1 && num2 > num3){
    maior = num2;
} else if (num3 > num1 && num3 > num2){
    maior = num3;
}

console.log (maior);

