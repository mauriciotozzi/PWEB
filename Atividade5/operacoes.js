const numero1 = prompt("Digite o 1º número")
const numero2 = prompt("Digite o 2º número")

const soma = parseFloat(numero1) + parseFloat(numero2)
const sub = parseFloat(numero1) - parseFloat(numero2)
const div = parseFloat(numero1) / parseFloat(numero2)
const rest = parseFloat(numero1) % parseFloat(numero2)

alert("Soma: " + soma + "\n" + "Subtração: " + sub + "\n" + "Divisão: " + div + "\n" + "Resto Divisão: " + rest)