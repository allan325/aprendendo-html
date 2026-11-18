const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");
let saldo = 1000;

botao.addEventListener("click",function(){
  const input = Number(document.getElementById("input").value);
  const op = document.getElementById("select").value;
   switch(op){
        case "1":
          resultado.textContent = `vc tem ${saldo} de saldo`;
          break;
        case "2":
          if ( input > 0 && Number.isInteger(input)){
          conta = input + saldo
          saldo = conta 
          resultado.textContent = `sucesso agora o seu saldo é ${saldo}`
          }
          else {  resultado.textContent = 'Digite um valor valido';}
          break;
        case "3":
          if (input > saldo){
          resultado.textContent = `Voce não tem saldo`
          }
          else if (input > 0) {
          sacar = input
          conta = saldo - input
          saldo = conta
           
          notaDe100 = 0
          notaDe50 = 0
          notaDe20 = 0
          notaDe10 = 0
          notaDe5 = 0
          notaDe2 = 0
          
          while ( sacar > 0) {
          if (sacar >= 100  ){
            sacar -= 100
            notaDe100 +=1}
          else if (sacar >= 50){
            sacar -= 50

            notaDe50 +=1}
          else if (sacar >= 20){
            sacar -= 20
           
            notaDe20 +=1}
          else if (sacar >= 10){
            sacar -= 10
           
            notaDe10 +=1}
          else if (sacar >= 5){
            sacar -= 5
           
            notaDe5 +=1}
          else if (sacar >= 2){
            sacar -= 2
           
            notaDe2 +=1}
            
          else{break}
          }

          resultado.textContent = `Voce sacou  com 100 ${notaDe100}| 50 ${notaDe50} |20 ${notaDe20} |10 ${notaDe10} | 5 ${notaDe5} | 2 ${notaDe2}`

          break;
    }
}})