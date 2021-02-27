const multiply = require('./multiply.js');

test('multiply() returns a number', () => {
  expect(typeof multiply(2, 2)).toBe('number');
});

test('2*2 = 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('200*200 = 40000', () => {
  expect(multiply(200, 200)).toBe(40000);
});

// when nothing is passed
// when strings are passed
// when large numbers are passed
