const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];

const lessThan18 = (age) => age < 18;
console.log('Menor de 18? (17)', lessThan18(17));
console.log('Menor de 18? (32)', lessThan18(32));

const anyLessThan18 = (array) => array.some(age => age < 18);
console.log('Alguma pessoa menor de 18? (ages)', anyLessThan18(ages))