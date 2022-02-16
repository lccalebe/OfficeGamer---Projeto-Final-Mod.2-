$("#enviar").click(function(event){

    event.preventDefault();

    var senha = $("#password").val();
    var confirmaSenha = $("#nova-password").val();

    if(senha != confirmaSenha ){

        document.getElementById("msgn-senha").innerHTML = "Senhas estão diferentes";

    } else {
       
        document.getElementById("msgn-senha").innerHTML = "";
      
        if(confirmaSenha.length < 8){
    
            document.getElementById("msgn-senha2").innerHTML = "senha muito curta";
    
        } else {
            document.getElementById("msgn-senha2").innerHTML = ""
        }

        window.location.href = "index.html";
    }
    


})