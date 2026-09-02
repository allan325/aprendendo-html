const botao = document.getElementById("verificar");

const resulado = document.getElementById("resultado");

botao.addEventListener("click", function(){
    const valordigitado = document.getElementById("idade").value; // deixa o document com d minusculo

    const idade = Number(valordigitado);

    if (valordigitado === "" || idade < 0){   // 3= é pra verificar se stg
        resulado.textContent = "informe uma idade valida.";
    } else if (idade >= 18) {
        resulado.textContent = "Voce é maior de idade";
    } else {
        resulado.textContent = "Voce é menor de idade";
    }
});
