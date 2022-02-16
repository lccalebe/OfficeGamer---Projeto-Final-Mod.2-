$("#enviarNovaSenha").click(function(){

    var senha = $("#novaSenha").val();
    var confirmaSenha = $("#confirmSenha").val();

    if(senha != confirmaSenha ){

        document.getElementById("mensagem").innerHTML = "Senhas estão diferentes";

    } else {
       
        document.getElementById("mensagem").innerHTML = "";
      
        if(confirmaSenha.length < 8){
    
            document.getElementById("mensagem").innerHTML = "senha muito curta";
    
        } else {
            document.getElementById("mensagem").innerHTML = ""
        }

        window.location.href = "index.html";
    }
    


})