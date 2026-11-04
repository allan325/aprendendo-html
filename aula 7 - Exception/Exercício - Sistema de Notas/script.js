const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");
const finalizacao = document.getElementById("finalizacao");

botao.addEventListener("click",function(){
    try{

        const nota1 = document.getElementById("nota1").value;
        const nota2 = document.getElementById("nota2").value;
        const nota3 = document.getElementById("nota3").value;

        const numero1 = Number(nota1)
        const numero2 = Number(nota2)
        const numero3 = Number(nota3)

        if( nota1 === "" || nota2 === "" || nota3 === "") {
            throw new Error ("Prencher os três campos.");
        }

        if (!Number.isFinite(numero1) || !Number.isFinite(numero2) || !Number.isFinite(numero3)){
            throw new Error ("Digite três numero validos");
        }
         
        const notaFinal = (numero1 + numero2 + numero3) / 3
    } catch (erro) {
        resultado.textContent = "Erro: " + erro.message;
    }finally{
        finalizacao.textContent = "Verificaçaõ finalizada." + notaFinal;
    }
})