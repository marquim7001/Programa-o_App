// Função para calcular o IMC
function calcularIMC() {
    // Obtém os valores de peso e altura dos inputs e converte para números de ponto flutuante, uma vez que as entradas sao strings
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Verifica se os valores são válidos
    // isNaN verifica se o valor não é um número
    // verificar se os valores são maiores que zero

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // formata o número para ter duas casas decimais
    alert(`Seu IMC é: ${imc.toFixed(2)}`);
}
