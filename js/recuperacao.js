
$("#enviar").click(function(event){

    event.preventDefault();
    
    var recuperaSenha = $("#username").val();

    if(recuperaSenha.indexOf("@") == -1 || recuperaSenha.indexOf(".") == -1){
    
        document.getElementById("msgn-email").innerHTML = "O email precisa ter @ ou .";
        
    } else {

        document.getElementById("msgn-email").innerHTML = "";
        
        window.location.href = "novaSenha.html"

}


})


