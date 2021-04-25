//Quero calcular o valor total do meu projeto

//Capturar o valor que ganho por hora
var valorHora = document.getElementById("valor-hora")

// Capturar as horas que trabalho por dia
var horasProjeto = document.getElementById("horas-projeto")

// Capturar a resposta do projeto
var resposta = document.getElementById("resposta")

function calcular() {
    var totalHorasProjeto =(valorHora.valueAsNumber * horasProjeto.valueAsNumber).toFixed(2)
    

//imprime na tela o resultado
console.log(calcular)
    resposta.innerText = "R$" + totalHorasProjeto
}