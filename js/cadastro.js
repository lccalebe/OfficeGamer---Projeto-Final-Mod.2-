let erro = document.querySelector("#error-validation");
let submit = document.querySelector("#btn-registrar");
let nome = document.querySelector("#name");
let senha = document.querySelector("#password");
let confirrm = document.querySelector("#confirm-password")
let email= document.querySelector("#email");
let sobrenome = document.querySelector("#sobrenome");
let cb = document.querySelector("#checkbox");
let register = document.querySelector("#register");
let form = document.querySelector("#register-form");
let info = document.querySelector(".info");
let msgEmail = document.querySelector("#msgn-email");
let msgNome = document.querySelector("#msgn-nome");
let msgSobreNome = document.querySelector("#msgn-sobrenome");
let msgSenha = document.querySelector("#msgn-senha");
let msgConfirrm = document.querySelector("#msgn-confirm");

function validaForm(){

    if(nome == false  || sobrenome == false  || email == false || senha == false || confirrm == false || cb.checked == false){
        erro.innerHTML = "tente novamente"
    }else{
        register.innerHTML = "usuario cadastrado com sucesso";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
    console.log("certo")
}

submit.addEventListener('click', function(event){
    event.preventDefault();

    
        if(nome.value.length < 3){
            nome.classList.add("err");
            msgNome.innerText = "Nome inválido";
            return false
        }   nome.classList.add("ok");
            msgNome.innerText = "";
            
        

        if(sobrenome.value.length < 3){
            nome.classList.add("err");
            msgSobreNome.innerText = "Sobrenome inválido"
            return false
        }   nome.classList.add("ok");
            msgSobreNome.innerText = "";
        
        

        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            email.classList.add("err");
            msgEmail.innerText = "E-mail inválido";
            return false
        }   email.classList.add("ok");
            msgEmail.innerText = "";
       
        
       
        if(senha.value.length < 8){
            senha.classList.add("err");
            msgSenha.innerText = "Senha inválida";
            return false
        }   senha.classList.add("ok");
            msgSenha.innerText = "";
        

        if(confirrm.value.length !== senha.value.length || confirrm.value.length == ""){
            msgConfirrm.innerText = "Senha incorreta";
            confirrm.classList.add("err");
            return false
        }   confirrm.classList.add("ok");
            msgConfirrm.innerText = "";


        if(cb.checked == false){
            erro.innerHTML = `é importante ler e aceitar os termos de uso.`;
            return false
        }
        erro.innerHTML = ``;

        return validaForm();
});

