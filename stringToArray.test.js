const stringToArray = require('./stringToArray');

test('Returns array from provided string', () => {
  expect(stringToArray('test')).toEqual(['t', 'e', 's', 't']);
  expect(stringToArray('te st')).toEqual(['t', 'e', ' ', 's', 't']);
  expect(stringToArray('123')).toEqual(['1', '2', '3']);
});

test('Returns empty array from empty string', () => {
  expect(stringToArray('')).toEqual([]);
  expect(stringToArray(' ')).toEqual([' ']);
});
