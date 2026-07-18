const ano = new Date().getFullYear();

document.querySelector("#currentyear").textContent = ano;



document.querySelector("#lastModified").textContent =
`Última atualização: ${document.lastModified}`;



const temperatura = 5;

const velocidadeVento = 20;



function calcularSensacaoTermica(temperatura, velocidadeVento){

return 13.12 + 
0.6215 * temperatura -
11.37 * Math.pow(velocidadeVento,0.16) +
0.3965 * temperatura *
Math.pow(velocidadeVento,0.16);

}



let resultado = "N/A";



if(temperatura <= 10 && velocidadeVento > 4.8){


resultado =
calcularSensacaoTermica(
temperatura,
velocidadeVento
).toFixed(0)
+"°C";


}



document.querySelector("#windChill").textContent = resultado;