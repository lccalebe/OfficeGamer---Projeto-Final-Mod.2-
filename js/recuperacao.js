
function confirmacao(){
var recuperaSenha = $("#email").val();

if(recuperaSenha.indexOf("@") == -1 || recuperaSenha.indexOf(".") == -1){
    
    document.getElementById("aviso").innerHTML = "O email precisa ter @ ou .";
        
} else {

    document.getElementById("aviso").innerHTML = "";
    
    window.location.href = "enviado.html"

}


}


