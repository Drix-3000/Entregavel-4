const { calcularSomatorio } = require("../Funcoes/Somatorio");

test("calcula a soma", () => {
  expect(calcularSomatorio([5, 10, 15, 20, 25])).toBe(75);
});

test("array vazio retorna zero", () => {
  expect(calcularSomatorio([])).toBe(0);
});
