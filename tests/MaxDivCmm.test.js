const { mdc } = require("../Funcoes/MaxDivCmm");

test("calcula o MDC", () => {
  expect(mdc(24, 36)).toBe(12);
  expect(mdc(10, 5)).toBe(5);
  expect(mdc(7, 13)).toBe(1);
});

test("calcula o MDC", () => {
    expect(mdc(1, 1)).toBe(1);
});
