$("#enviar").click(function(event){

    event.preventDefault();

    //declando variaveis

    var senha = $("#password").val();
    var confirmaSenha = $("#nova-password").val();

       
    //checando se as senhas são iguais

    if(senha != confirmaSenha ){

        document.getElementById("msgn-senha").innerHTML = "Senhas estão diferentes";
        var senhaIgual = false;

    } else {
       
        document.getElementById("msgn-senha").innerHTML = "";
        var senhaIgual = true;
    }
    

    //checando o tamanho da senha

    if(confirmaSenha.length < 8){

        document.getElementById("msgn-senha2").innerHTML = "senha muito curta";
        var tamanhoSenha = false;

    } else {
        document.getElementById("msgn-senha2").innerHTML = ""
        var tamanhoSenha = true;
    }


    //confirmando se as duas checagem passaram.

    if(senhaIgual == true && tamanhoSenha == true){

        var confirmacaoUm = true;
        valido(senha);
       
    }

   
    
    function valido(senha) {
                
        var letraMaiscula = 0;
        var numero = 0;
        var caracterEspecial = 0;
        var caracteresEspeciais = "!@#$%&*\|/?";
        
        for (var i=0; i <= senha.length; i++) {
          var valorAscii = senha.charCodeAt(i);
          
          // de A até Z
          if (valorAscii >= 65 && valorAscii <= 90){
            letraMaiscula++;
          }
          // de 0 até 9
          if (valorAscii >= 48 && valorAscii <= 57){
            numero++;
          }
          
          // indexOf retorna -1 quando NÃO encontra
          if (caracteresEspeciais.indexOf(senha[i]) != -1){
            caracterEspecial++;
        }

        // confirmando os caracteres
        if(letraMaiscula >= 1 && numero >= 1 && caracterEspecial >= 1){

            var confirmacaoDois = true;

        };

        //parte final
        if(confirmacaoUm == true && confirmacaoDois == true){
            window.location.href = "index.html";
            document.getElementById("msgn-senha2").innerHTML = ""

        } else {
            document.getElementById("msgn-senha2").innerHTML = "A senha precisa de um caractere especial, um numero e uma letra maiuscula";
        }


        }
              
       
      }



})