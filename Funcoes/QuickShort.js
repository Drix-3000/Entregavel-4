function quicksort(array) {
    // Caso base: arrays com 0 ou 1 elemento já estão ordenados
    if (array.length <= 1) {
        return array;
    }

    // Escolhe o pivô (neste caso, o último elemento)
    const pivo = array[array.length - 1];
    const esquerdos = []; // Elementos menores que o pivô
    const direitos = [];  // Elementos maiores ou iguais ao pivô

    // Particiona o array (ignorando o pivô no final)
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivo) {
            esquerdos.push(array[i]);
        } else {
            direitos.push(array[i]);
        }
    }

    // Ordena as sub-listas recursivamente e concatena o resultado
    return [...quicksort(esquerdos), pivo, ...quicksort(direitos)];
}

// Exemplo de uso:
const numeros = [38, 27, 43, 3, 9, 82, 10];
const ordenados = quicksort(numeros);

console.log("Array original:", numeros);
console.log("Array ordenado:", ordenados); // Saída: [3, 9, 10, 27, 38, 43, 82]

module.exports = { quicksort };