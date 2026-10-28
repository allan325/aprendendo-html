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
          if ( input > 0 && !Number.isInteger(input)){
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
          else if (input %10 == 0 && input > 0) {
          sacar = input
          conta = input - saldo
          saldo = conta
           
          
          while ( input > 0) {
          if (input - 100){
            input - 100
            notaDe100 = 0
            notaDe100 +=1}
          else if (input - 50){
            input - 50
            notaDe50 = 0
            notaDe50 +=1}
          else if (input - 20){
            input - 20
            notaDe20 = 0
            notaDe20 +=1}
          else if (input - 10){
            input - 10
            notaDe10 = 0
            notaDe10 +=1}
          else{}
          }

          resultado.textContent = `Voce sacou ${sacar} 50 ${notaDe50} 20 ${notaDe20} 10 ${notaDe10}`

          break;
        

          
          
        
    }
}})