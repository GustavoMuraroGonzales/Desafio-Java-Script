 function displayResumo() {
    alert("CHEGOU NO RESUMO");
var nomeClienteP = document.getElementById("NomeCliente");
var nomeCliente = localStorage.getItem("nomeCliente");
var emailp = document.getElementById("email");
var email = localStorage.getItem("email");
var enderecop = document.getElementById("endereco");
var endereco = localStorage.getItem("endereco");
var bairrop = document.getElementById("bairro");
var bairro = localStorage.getItem("bairro");
var cidadep = document.getElementById("cidade");
var cidade = localStorage.getItem("cidade");
var complementop = document.getElementById("complemento");
var complemento = localStorage.getItem("complemento");
var estadop = document.getElementById("uf");
var estado = localStorage.getItem("uf");
var telefonep = document.getElementById("telefone");
var telefone = localStorage.getItem("telefone");
var cepp = document.getElementById("cep")
var cep = localStorage.getItem ("cep");




nomeClienteP.innerHTML = nomeCliente.innerValue;
emailp.innerHTML = email.innerValue;
enderecop.innerHTML = endereco.innerValue;
bairrop.innerHTML = bairro.innerValue;
cidadep.innerHTML = cidade.innerValue;
complementop.innerHTML = complemento.innerValue;
estadop.innerHTML = estado.innerValue;
telefonep.innerHTML = telefone.innerValue;
cepp.innerHTML - cep.innerValue;

 }