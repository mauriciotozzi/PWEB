var nomeAluno = prompt("Digite o nome do aluno")

var primeiraNota = prompt("Digite a primeira nota")
var segundaNota = prompt("Digite a segunda nota")
var terceiraNota = prompt("Digite a terceira nota")

const media = (parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota)) / 3

alert("O aluno " + nomeAluno + " Obteve a média  de " + media.toFixed(2))