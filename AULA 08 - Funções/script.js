const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function calcularDesconto(preco,porcentagem) {
    const valorDesconto = preco * porcentagem / 100;

    return preco - valorDesconto
}


function fromatarMoeda(valor){
    return valor.toLocaleString("pt-BR",{ style:"currency" , currency : "BRL"})

}

botao.addEventListener("click",function(){
   
        const textoPreco = document.getElementById("preco").value;
        preco = Number(textoPreco)
        const textoDesconto = document.getElementById("desconto").value;
        desconto = Number (textoDesconto)

        if (preco < 0 || desconto < 0 || !Number.isFinite(preco) || !Number.isFinite(desconto) || preco === "" || desconto === ""){
         resultado.textContent = "infelizmente"
        }

        const precoFinal = calcularDesconto(preco,desconto);

        resultado.textContent = "Preço final:" + fromatarMoeda(precoFinal)
    
})