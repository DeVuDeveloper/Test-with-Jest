const { Calculator } = require('./index');

describe('add method', () => {
  test('Adding', () => {
    const calculator = new Calculator(0.2, 0.1);
    expect(calculator.add()).toBe(0.3);
  });

  test('Number is missing', () => {
    const calculator = new Calculator(4);
    expect(() => calculator.add()).toThrow('Input missing');
  });

  test('Both numbers are missing', () => {
    const calculator = new Calculator();
    expect(() => calculator.add()).toThrow('Input missing');
  });

  test('Wrong type of input', () => {
    const calculator = new Calculator('s', 6);
    expect(() => calculator.add()).toThrow('Must be number');
  });
});

describe('Subtract method', () => {
  test('is subtracting 2 numbers', () => {
    const calculator = new Calculator(3, 2.7);
    expect(calculator.subtract()).toBeCloseTo(0.3);
  });

  test('One number is missing', () => {
    const calculator = new Calculator(35);
    expect(() => calculator.subtract()).toThrow('Input missing');
  });

  test('Both numbers are missing', () => {
    const calculator = new Calculator();
    expect(() => calculator.subtract()).toThrow('Input missing');
  });

  test('Wrong type of input', () => {
    const calculator = new Calculator('w', 7);
    expect(() => calculator.subtract()).toThrow('Must be number');
  });
});

describe('Divide method', () => {
  test('is dividing 2 numbers', () => {
    const calculator = new Calculator(35, 7);
    expect(calculator.divide()).toBe(5);
  });

  test('One number is missing', () => {
    const calculator = new Calculator(35);
    expect(() => calculator.divide()).toThrow('Input missing');
  });

  test('Both numbers are missing', () => {
    const calculator = new Calculator();
    expect(() => calculator.divide()).toThrow('Input missing');
  });

  test('Wrong type of input', () => {
    const calculator = new Calculator('f', 7);
    expect(() => calculator.divide()).toThrow('Must be number');
  });
});
describe('Multiply method', () => {
  test('is multiplying 2 numbers', () => {
    const calculator = new Calculator(7, 5);
    expect(calculator.multiply()).toBe(35);
  });

  test('One number is missing', () => {
    const calculator = new Calculator(7);
    expect(()=> calculator.multiply()).toThrow('Input missing');
  });

  test('Both numbers are missing', () => {
    const calculator = new Calculator();
    expect(() => calculator.multiply()).toThrow('Input missing');
  });

  test('Wrong type of input', () => {
    const calculator = new Calculator('j', 7);
    expect(() => calculator.multiply()).toThrow('Must be number');
  });
});