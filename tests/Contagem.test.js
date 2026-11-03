const { contarInteirosEntrePrimeiroEUltimo } = require("../Funcoes/Contagem");

test("conta inteiros entre primeiro e último", () => {
  expect(contarInteirosEntrePrimeiroEUltimo([5, 2.5, 8, 3, 10, 1, 7])).toBe(2);
});

test("array vazio retorna zero", () => {
  expect(contarInteirosEntrePrimeiroEUltimo([])).toBe(0);
});
