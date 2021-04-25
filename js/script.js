//Quero calcular o valor da minha hora de trabalho

//Capturar o valor total que ganho no mês
var ganhoMes = document.getElementById("ganho-mes")

// Capturar as horas que trabalho por dia
var horasDia = document.getElementById("horas-dia")

// Capturar a resposta do
var resposta = document.getElementById("resposta")

function calcularValorHora() {
    var totalHorasMes = horasDia.valueAsNumber *22
    var valorHora = (ganhoMes.valueAsNumber/ totalHorasMes).toFixed(2)

//imprime na tela o resultado
    console.log(calcularValorHora)
    resposta.innerText = "R$" + valorHora
}