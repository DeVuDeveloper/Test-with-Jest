const { Calculator } = require('./index.js');

describe('add method', () => {
  test('Adding', () => {
    const calculator = new Calculator( 12, 15);
    expect(calculator.add()).toBe(27);
  });

  test('Number is missing', () => {
    const calculator = new Calculator(12);
    expect(()=> calculator.add()).toThrow('Input missing');
  });

  test('Both numbers are missing', () => {
    const calculator = new Calculator();
    expect(()=> calculator.add()).toThrow('Input missing');
  });

  test('Wrong type of input', () => {
    const calculator = new Calculator('a', 4);
    expect(()=> calculator.add()).toThrow('Must be number');
  });
});

describe('Subtract method', () => {
  test('is subtracting 2 numbers', () => {
    const calculator = new Calculator( 15, 12);
    expect(calculator.subtract()).toBe(3);
  });

  test('One number is missing', () => {
    const calculator = new Calculator(12);
    expect(()=> calculator.subtract()).toThrow('Input missing');
  });

  test('Both numbers are missing', () => {
    const calculator = new Calculator();
    expect(()=> calculator.subtract()).toThrow('Input missing');
  });

  test('Wrong type of input', () => {
    const calculator = new Calculator('a', 4);
    expect(()=> calculator.subtract()).toThrow('Must be number');
  });
});

describe('Divide method', () => {
  test('is dividing 2 numbers', () => {
    const calculator = new Calculator( 15, 3);
    expect(calculator.divide()).toBe(5);
  });

  test('One number is missing', () => {
    const calculator = new Calculator(12);
    expect(()=> calculator.divide()).toThrow('Input missing');
  });

  test('Both numbers are missing', () => {
    const calculator = new Calculator();
    expect(()=> calculator.divide()).toThrow('Input missing');
  });

  test('Wrong type of input', () => {
    const calculator = new Calculator('a', 4);
    expect(()=> calculator.divide()).toThrow('Must be number');
  });
});
describe('Multiply method', () => {
  test('is multiplying 2 numbers', () => {
    const calculator = new Calculator( 15, 3);
    expect(calculator.multiply()).toBe(45);
  });

  test('One number is missing', () => {
    const calculator = new Calculator(12);
    expect(()=> calculator.multiply()).toThrow('Input missing');
  });

  test('Both numbers are missing', () => {
    const calculator = new Calculator();
    expect(()=> calculator.multiply()).toThrow('Input missing');
  });

  test('Wrong type of input', () => {
    const calculator = new Calculator('a', 4);
    expect(()=> calculator.multiply()).toThrow('Must be number');
  });
});