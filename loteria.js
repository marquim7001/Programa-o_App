// Função para gerar números aleatórios únicos
function gerarNumerosAleatorios(totalNumeros, maxNumero) {
    const numeros = new Set(); // o set garante que os números não se repitam
    while (numeros.size < totalNumeros) {
        const numeroAleatorio = Math.floor(Math.random() * maxNumero) + 1; // Gera um número aleatório entre 1 e maxNumero
        numeros.add(numeroAleatorio); // Adiciona o número ao Set
    }
    return Array.from(numeros); // Converte o Set para um Array
}

// Função para gerar números da Mega Sena
function gerarMegaSena() {
    const numeros = gerarNumerosAleatorios(6, 60); // Gera 6 números entre 1 e 60
    alert(`Mega Sena: ${numeros.join(", ")}`); // Exibe os números em um alerta
}

// Função para gerar números da Quina

function gerarQuina() {
    const numeros = gerarNumerosAleatorios(5, 80); // Gera 5 números entre 1 e 80
    alert(`Quina: ${numeros.join(", ")}`); // Exibe os números em um alerta
}

// Função para gerar números da Lotofácil
function gerarLotofacil() {
    const numeros = gerarNumerosAleatorios(15, 25); // Gera 15 números entre 1 e 25
    alert(`Lotofácil: ${numeros.join(", ")}`); // Exibe os números em um alerta
}
