let erro = document.querySelector("#error-validation");
let submit = document.querySelector("#btn");
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
        erro.innerHTML = `tente novamente`
    }else{
        register.innerHTML = "usuario cadastrado com sucesso";
        setTimeout(() => {
            window.location.href = "./teste.html"
        }, 2000);
    }
}

submit.addEventListener('click', function(event){
    event.preventDefault();

    
        if(nome.value.length < 3){
            nome.classList.add("err");
            msgNome.innerText = "Nome inválido"
        }else{
            nome.classList.add("ok");
            console.log(nome.value)
        }

        if(sobrenome.value.length < 3){
            nome.classList.add("err");
            msgSobreNome.innerText = "Sobrenome inválido"
        }else{
            nome.classList.add("ok");
            console.log(sobrenome.value)
        }

        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            email.classList.add("err");
            msgEmail.innerText = "E-mail inválido";
        }else{
            email.classList.add("ok");
            console.log(email.value)
        }
       
        if(senha.value.length < 8){
            senha.classList.add("err");
            msgSenha.innerText = "Senha inválida";
            
        }else{
            senha.classList.add("ok");
            console.log(senha.value)
        }

        if(confirrm.value === senha.value){
            confirrm.classList.add("ok");
            console.log(confirrm.value)
        }else{
            confirrm.classList.add("err");
            msgConfirrm.innerText = "Senha incorreta";
        }

        if(cb.checked == false){
            erro.innerHTML = `é importante ler e aceitar os termos de uso.`;
        }

        validaForm();
});

