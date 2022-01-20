const { capitalize } = require('./index');

describe('testing capitalize function', () => {
  it('"microverse" test', () => {
    expect(capitalize('microverse')).toBe('Microverse');
  });

  it('"project" test', () => {
    expect(capitalize('project')).toBe('Project');
  });

  it('"jest" test', () => {
    expect(capitalize('jest')).toBe('Jest');
  });
});