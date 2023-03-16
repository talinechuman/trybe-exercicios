const {sum, summationOf} = require('./aula2.1');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5.1 + 6.55 to equal 11.65', () => {
  expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
});

test('Espera que a função exista', () => {
  expect(typeof summationOf).toBe('function');
});

test('Espera que a somatória de 1 seja 1', () => {
  expect(summationOf(1)).toBe(1)
});