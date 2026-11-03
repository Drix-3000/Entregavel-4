function contarInteirosEntrePrimeiroEUltimo(dados) {
    if (!dados || dados.length === 0) {
        return 0;
    }

    const primeiro = dados[0];
    const ultimo = dados[dados.length - 1];

    // Define o menor e o maior limite entre o primeiro e o último dado
    const min = Math.min(primeiro, ultimo);
    const max = Math.max(primeiro, ultimo);

    let contador = 0;

    for (const valor of dados) {
        // Verifica se o valor é um número inteiro e se está dentro do intervalo [min, max]
        if (Number.isInteger(valor) && valor >= min && valor <= max) {
            contador++;
        }
    }

    return contador;
}

// Exemplo de uso:
const conjunto = [5, 2.5, 8, 3, 10, 1, 7]; 
// Primeiro elemento: 5 | Último elemento (N): 7
// Intervalo [5, 7]. Valores inteiros no intervalo: 5, 7 (2 inteiros)

console.log("Quantidade de números inteiros no intervalo:", contarInteirosEntrePrimeiroEUltimo(conjunto));

module.exports = { contarInteirosEntrePrimeiroEUltimo };