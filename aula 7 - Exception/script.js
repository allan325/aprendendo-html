const botaoIdade = document.getElementById("verificar");
const resultadoIdade = document.getElementById("resultaoIdade");
const finalizacaoIdade = document.getElementById("finalizacaoIdade");

botaoIdade.addEventListener("click",function(){
    finalizacaoIdade.textContent = "";

    try{
        const textoIdade = document.getElementById("idade").value;

        const idade = Number(textoIdade)

        if ( idade < 18) {
            throw new Error("Acesso permitido apenas para maior de idade.");
        }
        resultadoIdade.textContent = "Acesso autorizado!"; 
    } catch (erro) {
        resultadoIdade.textContent = "Erro: " + erro.message;
    }finally{
        finalizacaoIdade.textContent = "Verificaçaõ finalizada."
    }
})

const botaoDividir = document.getElementById("dividir");
const resultadoDividir = document.getElementById("resultadoDivisao");
const finalizacaoDividir = document.getElementById("finalizacaoDivisao");

botaoDividir.addEventListener("click",function(){
    finalizacaoDividir.textContent = "";

    try {
        const texto1 = document.getElementById("numero1").value;
        const texto2 = document.getElementById("numero2").value;
        const numero1 = Number(texto1)
        const numero2 = Number(texto2)

        if( texto1 === "" || texto2 === "") {
            throw new Error ("Prencher os dois campos.");
        }

        if (!Number.isFinite(numero1) || !Number.isFinite(numero2)){
            throw new Error ("Digite dois numero validos");
        }

        if (numero2 === 0) {
            throw new Error("Não é possivel dividir por zero");
        }

        const divisao = numero1 / numero2
        resultadoDividir.textContent = "Resultado: " + divisao;

    }catch(error){
        resultadoDividir.textContent = "Error: " + error.message;
    }finally{
        finalizacaoDividir.textContent = "Calculo Finalizado"
    }
})