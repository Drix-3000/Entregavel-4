function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const sequencia = [0, 1];

    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }

    return sequencia;
}

// Retorna os primeiros N termos da sequência
console.log(fibonacci(8)); // Saída: [0, 1, 1, 2, 3, 5, 8, 13]

module.exports = { fibonacci };