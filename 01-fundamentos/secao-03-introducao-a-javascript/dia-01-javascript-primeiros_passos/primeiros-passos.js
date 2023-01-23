// Exercício 01
// let age = 26;
// let nome = "Taline";
// console.log (age);
// console.log (nome);

// Exercicio 02
// let base = 5;
// let height = 8;
// let area = (base * height);
// let perimeter = (base*2+height*2);

// console.log (area);
// console.log (perimeter);

// //Exercicio 03
// let nota = 10;

// if (nota >= 80) {
//     console.log("Parbéns, você faz parte do grupo de pessoas aprovadas!");
// } else if (nota < 80 && nota >=60){
//     console.log ("Você está na nossa lista de espera");
// } else {
//     console.log("Infelizmente, você reprovou");
// }

//Exercicio 04
// let currenHour = 5;
// let message = "";

// if (currenHour >= 22){
//     message = "Não deveríamos comer nada, é hora de dormir"
// } else if (currenHour >= 18 && currenHour < 22){
//     message = "Rango da noite, vamos jantar :D"
// } else if (currenHour >= 14 && currenHour < 18){
//     message = "Vamos fazer um bolo pro café da tarde"
// } else if (currenHour >= 11 && currenHour < 14){
//     message = "Hora do almoço!!!"
// } else if (currenHour >= 4 && currenHour < 11){
//     message = "Hmmm, cheiro de café recém-passado"
// } 
// console.log (message);

// //Exercicio 05
// let weekDay = "sdddd";
// if (weekDay === "segunda-feira"|| weekDay ===  "terça-feira"|| weekDay === "quarta-feira"||weekDay === "quinta-feira"||weekDay === "sexta-feira"){
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// } else {
//     console.log("FINALMENTE, descanso merecido UwU");
// }

// Exercicio 06

let variavel = 'Aprovada';
let mensagem = "";

switch (variavel) {
    case 'Aprovada':
        mensagem = "Parabéns, você foi aprovada(o)!";
        break;
    case 'lista':
        mensagem = "Você está na nossa lista de espera";
        break;
    case 'reprovada':
            mensagem = "Você foi reprovada(o)";
            break;
    default:
        mensagem = "Informação incorreta"
}

console.log (mensagem);
