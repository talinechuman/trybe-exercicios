// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
  
//   const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
//     objeto[novaPropriedade] = valor;
//   };
  
//   adicionaPropriedade(customer, newKey, lastName);
//   console.log(customer);

// const pessoaEstudante = {};

// let newKey1 = 'name';
// const name = 'Taline';

// let newKey2 = 'email';
// const email = 'taline@gmail.com';

// let newKey3 = 'phone';
// const phone = '14996104538';

// let newKey4 = 'github';
// const github = 'git Taline';

// let newKey5 = 'linkedin';
// const linkedin = 'Linkedin Taline';
  
// const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
// objeto[novaPropriedade] = valor;
// };

// adicionaPropriedade(pessoaEstudante, newKey1, name);
// adicionaPropriedade(pessoaEstudante, newKey2, email);
// adicionaPropriedade(pessoaEstudante, newKey3, phone);
// adicionaPropriedade(pessoaEstudante, newKey4, github);
// adicionaPropriedade(pessoaEstudante, newKey5, linkedin);

// console.log(pessoaEstudante);

// Object.keys

// const coolestTvShow = {
//     name: 'BoJack Horseman',
//     genre: 'adult animation',
//     author: 'Raphael Bob-Waksberg',
//     favoriteCharacter: 'Princess Carolyn',
//     quote: 'Princess Carolyn always lands on her feet.',
//     seasons: 6,
//   };
  
//   for (const property in coolestTvShow) {
//     console.log(property);
//   }
  
//   // name
//   // genre
//   // author
//   // favoriteCharacter
//   // quote
//   // seasons

// const coolestTvShow = {
//     name: 'BoJack Horseman',
//     genre: 'adult animation',
//     createdBy: 'Raphael Bob-Waksberg',
//     favoriteCharacter: 'Princess Carolyn',
//     quote: 'Princess Carolyn always lands on her feet.',
//     seasons: 6,
//   };
  
//   // for (const property in coolestTvShow) {
//   //   console.log(property);
//   // }
  
//   console.log(Object.keys(coolestTvShow));
  
//   // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

const hq1 = {
    collection: 'Batman',
    title: 'Bataman: The Killing Joke',
    year: 1998,
};

hq1.author = 'Alan Moore';

// Validar se possuo a chave author
// console.log(Object.keys(hq1).includes('author'))

console.table(O);

