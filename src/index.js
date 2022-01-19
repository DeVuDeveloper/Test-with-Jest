const stringLength = (string) => {
  if (string.length < 1 || string.length > 10 ) {
    throw new Error( 'String should has length between 1 and 10 characters');
  }
  return string.length;
}

const reverseString = (string) => string.split('').reverse().join('');

class Calculator {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    if (!this.a || !this.b) {
      throw new Error('Input missing');
    }
    if (typeof this.a !== 'number' || typeof this.b !== 'number' ) {
      throw new Error('Must be number');
    }
    return this.a + this.b;
  };

  subtract() {
    if (!this.a || !this.b) {
      throw new Error('Input missing');
    }
    if (typeof this.a !== 'number' || typeof this.b !== 'number' ) {
      throw new Error('Must be number');
    }
    return this.a - this.b;
  }

  divide() {
    if (!this.a || !this.b) {
      throw new Error('Input missing');
    }
    if (typeof this.a !== 'number' || typeof this.b !== 'number' ) {
      throw new Error('Must be number');
    }
    return this.a / this.b;
  }

  multiply() {
    if (!this.a || !this.b) {
      throw new Error('Input missing');
    }
    if (typeof this.a !== 'number' || typeof this.b !== 'number' ) {
      throw new Error('Must be number');
    }
    return this.a * this.b;
  }
}





exports.stringLength = stringLength;
exports.reverseString = reverseString;
exports.Calculator = Calculator;