function mdc(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

// Exemplos de uso:
console.log(mdc(24, 36)); // Saída: 12
console.log(mdc(10, 5));   // Saída: 5
console.log(mdc(7, 13));   // Saída: 1

module.exports = { mdc };