function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  if (a === undefined || b === undefined || isNaN(a) || isNaN(b)) {
    throw new Error('Argument must be number');
  }
  return a * b;
}

function stringToArray(string) {
  return string.split('');
}

module.exports = { sum, multiply, stringToArray };
