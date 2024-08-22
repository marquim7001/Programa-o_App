// Função para converter a temperatura
function converterTemperatura() {
    // Obtém os valores de temperatura, unidade de origem e unidade de destino
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const unidadeOrigem = document.getElementById("unidadeOrigem").value;
    const unidadeDestino = document.getElementById("unidadeDestino").value;

    // Verifica se a temperatura é um número válido
    if (isNaN(temperatura)) {
        alert("Por favor, insira um valor válido para a temperatura.");
        return;
    }

    let temperaturaConvertida;

    // Converte a temperatura com base nas unidades selecionadas
    if (unidadeOrigem === "C" && unidadeDestino === "F") {
        // Celsius para Fahrenheit
        temperaturaConvertida = (temperatura * 9/5) + 32;
    } else if (unidadeOrigem === "F" && unidadeDestino === "C") {
        // Fahrenheit para Celsius
        temperaturaConvertida = (temperatura - 32) * 5/9;
    } else {
        // Se as unidades de origem e destino forem iguais, a temperatura não muda
        temperaturaConvertida = temperatura;
    }

    // Exibe o resultado em um alerta
    alert(`A temperatura convertida é: ${temperaturaConvertida.toFixed(2)}° ${unidadeDestino}`);
}
