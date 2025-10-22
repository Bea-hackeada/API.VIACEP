function capturarDado(){
   
   let inputCep = document.getElementById("cep").value
   console.log(inputCep);
   buscarAPI(inputCep)
}

async function buscarAPI(inputCep) {

   let dados = await fetch(`https://viacep.com.br/ws/${inputCep}/json/`) 
   .then(Response => Response.json())
   dadosTela(dados);

   
}

function dadosTela(dados){
    document.getElementById("estado").value = dados.uf
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("endereco").value = dados.logradouro
    

}

