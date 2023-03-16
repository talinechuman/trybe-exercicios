const average = require('./requisito01');

describe ('A função verifica a soma', () => {
    it('Verifica a soma', () => {
        expect(average([2,2])).toEqual(2);
        expect(average([1,1])).toEqual(1);
        expect(average([1,'2'])).toEqual(undefined);
    })
})

