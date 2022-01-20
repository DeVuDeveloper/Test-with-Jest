const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('String should has length between 1 and 10 characters');
  }
  return string.length;
};

const reverseString = (string) => string.split('').reverse().join('');

const capitalize = (string) => string.substring(0, 1).toUpperCase() + string.substring(1);


class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    if (!this.x || !this.y) {
      throw new Error('Input missing');
    }
    if (typeof this.x !== 'number' || typeof this.y !== 'number') {
      throw new Error('Must be number');
    }

  return (this.x * 10 + this.y * 10) / 10;
  }
 
  subtract() {
    if (!this.x || !this.y) {
      throw new Error('Input missing');
    }
    if (typeof this.x !== 'number' || typeof this.y !== 'number' ) {
      throw new Error('Must be number');
    }
    return (this.x * 10 - this.y * 10) / 10;
  }

  divide() {
    if (!this.x || !this.y) {
      throw new Error('Input missing');
    }
    if (typeof this.x !== 'number' || typeof this.y !== 'number') {
      throw new Error('Must be number');
    }
    return this.x / this.y;
  }

  multiply() {
    if (!this.x || !this.y) {
      throw new Error('Input missing');
    }
    if (typeof this.x !== 'number' || typeof this.y !== 'number' ) {
      throw new Error('Must be number');
    }
    return this.x * this.y;
  }
}

exports.stringLength = stringLength;
exports.reverseString = reverseString;
exports.Calculator = Calculator;
exports.capitalize = capitalize;