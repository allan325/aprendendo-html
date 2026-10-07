const botao = document.getElementById("verificar")

const resultado = document.getElementById("resultado")

const select = document.getElementById("opcao")

botao.addEventListener("click",function(){
    const opcao = document.getElementById("opcao").value;

    switch(opcao){
        case "1":
          resultado.textContent = "X-burguer  R$ 14";
          select.value = ""
           break;

        case "2":
          resultado.textContent = "X-frango  R$ 17";
          select.value = ""
          break;
        case "3":
          resultado.textContent = "X-salada     R$ 16";
          select.value = ""
          break;
        case "4":
          resultado.textContent = "Suco de limão  R$ 9";
          select.value = ""
          break;
        case "5":
          resultado.textContent = "Batata frita R$ 13";
          select.value = ""
          break;
        case "6":
          resultado.textContent = "Rerigerante preço:10";
          select.value = ""
          break;

        default:
            resultado.textContent = "Selecione um numero"
    }
})