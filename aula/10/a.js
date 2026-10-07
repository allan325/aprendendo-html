const botao = document.getElementById("verificar")

const resultado = document.getElementById("resultado")

const select = document.getElementById("dia")

botao.addEventListener("click", function(){
    const dia =document.getElementById("dia").value;

    switch (dia) {
        case "1":
            resultado.textContent = "segunda-feira";
            select.value = ""
            break;
        case "2":
            resultado.textContent = "Terça-feira";
            select.value = ""
            break;
        case "3":
            resultado.textContent = "Quarta-feira";
            select.value = ""
            break;
        case "4":
            resultado.textContent = "Quinta-feira";
            select.value = ""
            break;
        case "5":
            resultado.textContent = "sexta-feira";
            select.value = ""
            break;
        case "6":
            resultado.textContent = "Sabado";
            select.value = ""
            break;
        case "7":
            resultado.textContent = "Domingo";
            select.value = ""
            break;
        default:
            resultado.textContent = "Selecione um numero"
    }
})