const { sum } = require('./sample');

describe('sample tests', () => {
  test('1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2);
  })

  test('2 + 2 = 4', () => {
    expect(sum(2, 2)).toBe(4);
  })

  test('3 + 3 = 6', () => {
    expect(sum(3, 3)).toBe(6);
  })
});
