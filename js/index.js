const form = document.querySelector('#form');
const btnSubmit = document.querySelector('#btnSubmit');

form.addEventListener("submit", (e) => e.preventDefault() );
btnSubmit.addEventListener("click", () => {
  
    const nomeDoCliente = document.querySelector('input[name="inputNomeCliente"]').value;
    const endereco = document.querySelector('input[name="inputEdereço"]').value;
    const cidade = document.querySelector('input[name="inputCidade"]').value;
    const email = document.querySelector('input[name="inputEmail"]').value;
    const complemento = document.querySelector('input[name="inputComplemento"]').value;
    
    
    const uf = document.getElementById('inputUF');
    const valueuf = select.options[select.selectedIndex].value;

    const telefone = document.querySelector('input[name="inputTelefone"]').value;
    const bairro = document.querySelector('input[name="inputBairro"]').value;
    const cep = document.querySelector('input[name="inputCEP"]').value;

    localStorage.setItem("nomeCliente", nomeDoCliente);
    localStorage.setItem("endereco", endereco);
    localStorage.setItem("cidade", cidade);
    localStorage.setItem("email", email);
    localStorage.setItem("valueuf", valueuf);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("bairro", bairro);
    localStorage.setItem("cep", cep);
    localStorage.setItem("complemento", complemento);

    //window.location.replace("../ResumoCadastro/Resumo.html");
    alert(valueuf);
});