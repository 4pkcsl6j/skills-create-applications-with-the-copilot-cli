const { add, subtract, multiply, divide, modulo, power, sqrt } = require('../calculator');

describe('calculator extended operations', () => {
  test('modulo: 5 % 2 -> 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('power: 2 ^ 3 -> 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('square root: sqrt(16) -> 4', () => {
    expect(sqrt(16)).toBe(4);
  });

  // Edge cases
  test('sqrt of negative number throws', () => {
    expect(() => sqrt(-9)).toThrow('Square root of negative number');
  });

  test('modulo by zero throws', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero');
  });

  test('power with negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('modulo with floating point numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });
});
