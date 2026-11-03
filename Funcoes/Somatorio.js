// Função para calcular o somatório usando o método reduce
function calcularSomatorio(numeros) {
    return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

// Exemplo de uso com array
const numeros = [5, 10, 15, 20, 25];
const resultado = calcularSomatorio(numeros);

console.log("Array:", numeros);
console.log("Somatório:", resultado); // Saída: 75

module.exports = { calcularSomatorio };