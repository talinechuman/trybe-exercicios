const hq2 = {
    collection: 'Wonder Woman',
    title: 'A Twist of Fate',
    year: 2016,
};

 const author = {
    authorName: 'Meredith Finch',
};

const author2 = {
    authorName: 'Turma 30A',
};

// console.log(Object.assign(hq2, author));

// console.table(Object.assign({},hq2));

const hq2Clone = Object.assign({},hq2);
console.log(hq2);
