function filtrarParesEOrdenar(numeros) {
    const pares = []; // Cria um array vazio para armazenar os números pares
    // Itera sobre cada número no array de entrada
    for (let num of numeros) {
    // Verifica se o número é par
    if (num % 2===0) {
    pares.push(num); // Adiciona o número par ao array “pares”
    }
    }
    // Ordena o array “pares” em ordem crescente e retorna o resultado
    return pares.sort((a, b) => a- b);
    }
    // Exemplo de uso:
    const resultado = filtrarParesEOrdenar([5, 3, 8, 1, 4, 10]); // Chama a função com um array de exemplo
    console.log(resultado); // Exibe o resultado: [4, 8, 10]