// Um array com strings

// const mixNum = ['String', 'string', '2 String', '1 string'];

// mixNum.sort();

// console.log('Sort do mixNum: ', mixNum);

const scores = [2, 10, 21, 1];

// const comparar = (a, b) => {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     }
//     return 0;
// }

scores.sort((a,b) => a-b);

// scores.sort(comparar);
console.log('Sorted scores com callback: ', scores);