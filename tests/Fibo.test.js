const { fibonacci } = require("../Funcoes/Fibo");

test("retorna os primeiros termos", () => {
  expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("N menor ou igual a zero retorna array vazio", () => {
  expect(fibonacci(0)).toEqual([]);
});
