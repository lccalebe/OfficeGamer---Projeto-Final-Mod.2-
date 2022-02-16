//Alert quando o mouse sai da pag.

document.querySelector('body').onmouseleave = function(event) {
    alert("Já esta indo embora? \nVem conversa com a gente antes. \nQuem sabe você não ganha um desconto especial.")
}

//fim alert
// redirecionar para cadastrar.
function assinarRedirect() {
    setTimeout(() => {
        window.location.href = "./cadastrar.html"
    }, 1500);
}

//fim redirecionar