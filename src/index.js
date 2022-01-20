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

    let sum = 0;
    const sumArr = [this.x, this.y];
    const integers = () => sumArr.reduce((total, num) => total + num, 0);
    sumArr.forEach((n) => {
      if (Number.isInteger(n)) {
        return integers();
      }
    })
    return sumArr.reduce((total, n) => sum += n * 10, 0) / 10;
  }

  subtract() {
    if (!this.x || !this.y) {
      throw new Error('Input missing');
    }
    if (typeof this.x !== 'number' || typeof this.y !== 'number' ) {
      throw new Error('Must be number');
    }
    return this.x - this.y;
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