const botao = document.getElementById("botao");
const lista = document.getElementById("lista");


botao.addEventListener("click", function() {
    const input = document.getElementById("input").value;
    const numero = Number(input);
    lista.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i ;
        const item = document.createElement("li");
        item.textContent = `${numero} x ${i} = ${resultado}`;
        lista.appendChild(item)
    }
})