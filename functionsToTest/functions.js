function sum(a, b) {
  if (a === undefined || b === undefined || isNaN(a) || isNaN(b)) {
    throw new Error('Two numbers must be passed');
  }
  return a + b;
}

function multiply(a, b) {
  if (a === undefined || b === undefined || isNaN(a) || isNaN(b)) {
    throw new Error('Two numbers must be passed');
  }
  return a * b;
}

function stringToArray(string) {
  if (!string) return [];
  return string.split('');
}

module.exports = { sum, multiply, stringToArray };
