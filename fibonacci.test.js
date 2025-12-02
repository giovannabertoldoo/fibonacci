const fibonacci = require('./fibonacci');

test('Teste de vários números da sequência de Fibonacci', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(7)).toBe(13);
  expect(fibonacci(10)).toBe(55);
});
