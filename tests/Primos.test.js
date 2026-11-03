const { ehPrimo } = require("../Funcoes/Primos");

test("identifica números primos", () => {
  expect(ehPrimo(7)).toBe(true);
  expect(ehPrimo(2)).toBe(true);
});

test("identifica números não primos", () => {
  expect(ehPrimo(10)).toBe(false);
  expect(ehPrimo(1)).toBe(false);
});
