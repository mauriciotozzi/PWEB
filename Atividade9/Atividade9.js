/* PARTE 1 */

function Retangulo(base, altura) {
    this.base = x;
    this.altura = y;
    this.area = area;
  }

  var base = prompt("Digite a base");
  var altura = prompt("Digite a altura");

  var retangulo1 = new Person(base, altura);

  function area(){
      return x*y;
  }


/* PARTE 2 */

function Conta (nome, banco, numConta, saldo){
    this.nome = Nome;
    this.banco = Banco;
    this.numConta = NumConta;
    this.saldo = Saldo;
}


function Corrente (){
    var saldoEspecial;
    this.getSaldo = function (){
        return saldoEspecial;
    }
    this.setSaldo= function(valor){
        saldoEspecial = valor;
    }
}
function Poupanca (){
    var juros;
    var DataVenc;
    this.getjuros = function (){
        return juros;
    }
    this.getdatavenc = function (){
        return DataVenc;
    }
    this.setjuros= function(valor){
        juros = valor;
    }
    this.setDataVenc= function(valor){
        DataVenc = valor;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype =new Conta();

conta1 = new Conta("Mauricio", "Itau", 102030, 500);

conta1.setDataVenc;
conta1.setSaldo;
conta1.setjuros;

conta1.getSaldo;



