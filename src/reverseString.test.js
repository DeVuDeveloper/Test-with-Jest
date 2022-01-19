const { reverseString }= require('./index.js');

it('Reverse string', () => {
  expect(reverseString("Dejan")).toBe('najeD');
  expect(reverseString("Microverse")).toBe('esrevorciM');
});