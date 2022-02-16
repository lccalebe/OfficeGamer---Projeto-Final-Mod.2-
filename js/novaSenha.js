$("#enviar").click(function(event){

    event.preventDefault();

    var senha = $("#password").val();
    var confirmaSenha = $("#nova-password").val();

    

    if(senha != confirmaSenha ){

        document.getElementById("msgn-senha").innerHTML = "Senhas estão diferentes";
        var senhaIgual = false;

    } else {
       
        document.getElementById("msgn-senha").innerHTML = "";
        var senhaIgual = true;
    }
    
    if(confirmaSenha.length < 8){

        document.getElementById("msgn-senha2").innerHTML = "senha muito curta";
        var tamanhoSenha = false;

    } else {
        document.getElementById("msgn-senha2").innerHTML = ""
        var tamanhoSenha = true;
    }

    if(senhaIgual == true && tamanhoSenha == true){

    window.location.href = "index.html";
    
    }
    
})