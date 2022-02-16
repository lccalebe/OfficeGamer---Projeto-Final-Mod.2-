let erro = document.querySelector("#error-validation");
let submit = document.querySelector("#btn");
let nome = document.querySelector("#name");
let senha = document.querySelector("#password");
let confirrm = document.querySelector("#confirm-password")
let email= document.querySelector("#email");
let sobrenome = document.querySelector("#sobrenome");
let cb = document.querySelector("#checkbox");


submit.addEventListener('click', function(event){
    event.preventDefault();

    try {
        if(nome.value == "" || nome.value.length < 3){
            throw `Digite um nome válido.`;
        }

        if(sobrenome.value == "" || sobrenome.value.length < 3){
            throw `Digite um sobrenome válido.`;
        }

        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            throw `E-mail inválido.`;
        }

       
        if(senha.value.length < 8){
            throw `faça uma senha com 8 caracteres.`;
        }else{
            erro.innerHTML = "";
        }

        if(confirrm.value !== senha.value){
            throw `Sua senha não está correta.`
        }

        //if(cb.value !== true){
        //    throw `é importante ler e aceitar os termos de uso.`
        //}else{
        //    erro.innerHTML = "";
        //}

        window.location.href = "./teste.html"
        
    } 
    
    catch (error) {
        erro.innerHTML = error;
    }



});

