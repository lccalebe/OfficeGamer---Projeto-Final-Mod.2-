/*resposta do botão*/
document.querySelector("#btn").onclick = function(event){

    const cidade = $("#cidade");
    const estado = $("#estado");
    const rua = $("#rua");
    const numero = $("#numero");
    const bairro = $("#bairro");
    const erro = $("#error");

    var cep = document.querySelector("#enviar").value;

$.ajax({
    url:`https://viacep.com.br/ws/${cep}/json/`,
    success: function(response){
        cidade.val(response.localidade);
        estado.val(response.uf);
        rua.val(response.logradouro);
        numero.val(response.gia);
        bairro.val(response.bairro);
        erro.text("");
    },

    error: function(){
        erro.text(` Digite um CEP válido`);
    }
})}