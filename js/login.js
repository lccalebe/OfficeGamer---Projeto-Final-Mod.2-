$("#enviar").click(function(event){

    event.preventDefault()

    var login = $("#username").val();
    var senha = $("#password").val();
    
    if(login.indexOf("@") == -1 || login.indexOf(".") == -1){
    
        document.getElementById("msgn-email").innerHTML = "O email precisa ter @ ou .";
        var loginValido = false
            
    } else {
    
        document.getElementById("msgn-email").innerHTML = "";
        var loginValido = true;
    
    }

    if(senha.length < 8){
    
        document.getElementById("msgn-senha").innerHTML = "senha invalida, favor inserir uma senha com mais de 8 digitos";
        var senhaValida = false;
        
            
    } else {
    
        document.getElementById("msgn-senha").innerHTML = "";
        var senhaValida = true;
    
    }


    if(loginValido == true && senhaValida == true){
        window.location.href = "index.html"
    }


})