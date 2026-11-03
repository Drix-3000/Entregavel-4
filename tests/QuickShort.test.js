const { quicksort } = require("../Funcoes/QuickShort");

test("ordena o array", () => {
  expect(quicksort([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82]);
});

test("array vazio", () => {
  expect(quicksort([])).toEqual([]);
});
