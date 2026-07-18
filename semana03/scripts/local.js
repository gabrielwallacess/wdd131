// Ano atual no rodapé
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// Última modificação do documento
document.querySelector("#lastModified").textContent =
    `Última atualização: ${document.lastModified}`;



// Valores estáticos do clima
const temperatura = 24; // °C
const velocidadeVento = 8; // km/h



// Função para calcular sensação térmica
function calcularSensacaoTermica(temperatura, velocidadeVento) {

    return 13.12 + 0.6215 * temperatura 
        - 11.37 * Math.pow(velocidadeVento, 0.16)
        + 0.3965 * temperatura * Math.pow(velocidadeVento, 0.16);

}



// Verificação das condições para cálculo
let sensacao = "N/A";

if (temperatura <= 10 && velocidadeVento > 4.8) {

    sensacao = calcularSensacaoTermica(
        temperatura,
        velocidadeVento
    ).toFixed(0) + "°C";

}


// Exibir resultado na página
document.querySelector("#windChill").textContent = sensacao;