const functions = require('../functions.js');

describe('Multiply function', () => {
  test('multiply() returns a number', () => {
    expect(typeof functions.multiply(2, 2)).toBe('number');
  });

  test('Throws error if both arguments are not included', () => {
    expect(() => {
      functions.multiply();
    }).toThrow();
    expect(() => {
      functions.multiply(1);
    }).toThrow();
  });

  test('Throws error if either argument is not a number, nor can be coerced to a number', () => {
    expect(() => {
      functions.multiply('test', 'test');
    }).toThrow();
    expect(() => {
      functions.multiply(1, 'test');
    }).toThrow();
    expect(() => {
      functions.multiply('test', 1);
    }).toThrow();
  });

  test('2*2 = 4', () => {
    expect(functions.multiply(2, 2)).toBe(4);
  });

  test('200*200 = 40000', () => {
    expect(functions.multiply(200, 200)).toBe(40000);
  });
});
