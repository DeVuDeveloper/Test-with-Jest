const { reverseString } = require('./index');

it('Reverse string', () => {
  expect(reverseString('Dejan')).toBe('najeD');
  expect(reverseString('Microverse')).toBe('esrevorciM');
});