 function displayResumo() {

var nomeClienteP = document.getElementById("nomeCliente");
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




nomeClienteP.innerHTML = "&nbsp" + nomeCliente;
emailp.innerHTML = "&nbsp" + email;
enderecop.innerHTML = "&nbsp" + endereco;
bairrop.innerHTML = "&nbsp" + bairro;
cidadep.innerHTML = "&nbsp" + cidade;
complementop.innerHTML = "&nbsp" + complemento;
estadop.innerHTML = "&nbsp" + estado;
telefonep.innerHTML = "&nbsp" + telefone;
cepp.innerHTML = "&nbsp" + cep;
};