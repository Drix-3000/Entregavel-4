function ehPrimo(n) {
    if (n <= 1) {
        return false;
    }

    // Testa divisores de 2 até a raiz quadrada de n
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false; // Se encontrar um divisor, não é primo
        }
    }

    return true;
}

// Exemplos de uso:
console.log(ehPrimo(7));  // true
console.log(ehPrimo(10)); // false
console.log(ehPrimo(1));  // false
console.log(ehPrimo(2));  // true

module.exports = { ehPrimo };