var escolha_PC = Math.floor(Math.random() * 3)

var entrada = prompt("Faça sua escolha. Pedra / Papel / Tesoura")

if (entrada == "pedra")
{
        numero = 0
    }else if (entrada == "papel"){
       numero = 1
    }else if (entrada == "tesoura") {
       numero = 2
    }else{
        alert("Opção inválida")        
} 

//alert (escolha_PC + " / " + numero)

if (escolha_PC == numero ){
    alert("EMPATE")
}else if(escolha_PC < numero){
    alert ("Jogador Ganhou")
}else{
    alert ("Computador Ganhou")
}
