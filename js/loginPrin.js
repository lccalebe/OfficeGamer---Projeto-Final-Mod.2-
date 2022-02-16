$("#enviar").click(function(){

    var login = $("#login").val();
    var senha = $("#senha").val();
    
    if(login.indexOf("@") == -1 || login.indexOf(".") == -1){
    
        document.getElementById("aviso").innerHTML = "O email precisa ter @ ou .";
            
    } else {
    
        document.getElementById("aviso").innerHTML = "";
    
    }

    if(senha.length < 8){
    
        document.getElementById("aviso2").innerHTML = "senha invalida";
        
            
    } else {
    
        document.getElementById("aviso2").innerHTML = "";
    
    }


})