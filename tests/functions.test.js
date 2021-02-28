const functions = require('../functionsToTest/functions.js');

describe('Sum function...', () => {
  test('...returns a number', () => {
    expect(typeof functions.sum(1, 1)).toBe('number');
  });

  test('...throws error if both arguments are not included', () => {
    expect(() => {
      functions.sum(1);
    }).toThrow();
  });

  test('...throws error if either argument is not a number', () => {
    expect(() => {
      functions.sum('test', 'test');
    }).toThrow();
  });

  test('...2+2 = 4', () => {
    expect(functions.sum(2, 2)).toBe(4);
  });
});

describe('Multiply function...', () => {
  test('...returns a number', () => {
    expect(typeof functions.multiply(2, 2)).toBe('number');
  });

  test('...throws error if both arguments are not included', () => {
    expect(() => {
      functions.multiply();
    }).toThrow();
    expect(() => {
      functions.multiply(1);
    }).toThrow();
  });

  test('...throws error if either argument is not a number', () => {
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

  test('...2*2 = 4', () => {
    expect(functions.multiply(2, 2)).toBe(4);
  });

  test('...200*200 = 40000', () => {
    expect(functions.multiply(200, 200)).toBe(40000);
  });
});

describe('stringToArray function...', () => {
  test('...returns an array', () => {
    expect(Array.isArray(functions.stringToArray('test'))).toBe(true);
  });
  test('...returns array where each character of provided string is an element', () => {
    expect(functions.stringToArray('test')).toEqual(['t', 'e', 's', 't']);
  });
  test('...throws error if argument is not of type string', () => {
    expect(() => {
      functions.stringToArray(123);
    }).toThrow();
  });
  test('...returns array with empty string when string with single space provided', () => {
    expect(functions.stringToArray(' ')).toEqual([' ']);
  });
  test('...returns an empty array when no argument provided', () => {
    expect(functions.stringToArray()).toEqual([]);
  });
  test('...returns an empty array when empty string provided', () => {});
  expect(functions.stringToArray('')).toEqual([]);
});
