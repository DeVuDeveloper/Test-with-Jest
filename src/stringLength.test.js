const { stringLength } = require('./index');

it('Count length of string', () => {
  expect(stringLength('string')).toBe(6);
  expect(stringLength('longString')).toBe(10);
});

it('Length is between 1 and 10 characters', () => {
  expect(() => {
    stringLength('');
  })
    .toThrow('String should has length between 1 and 10 characters');
  expect(() => {
    stringLength('moreThanTenLetters');
  })
    .toThrow('String should has length between 1 and 10 characters');
});