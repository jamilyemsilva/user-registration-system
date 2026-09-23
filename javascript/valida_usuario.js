window.onload = function() {
    var botao_enviar = document.getElementById("botao_enviar");
    var formulario = document.getElementById("formulario");

    botao_enviar.addEventListener("click", function(event) {
        var usuario = document.getElementById("txt_usuario").value.trim();
        var senha = document.getElementById("pwd_senha").value.trim();
        if ((usuario === "ADMIN" && senha === "AD#SP03") || (usuario === "CADASTRO" && senha === "CDSP03")) {
            window.location.href = "valida_usuario.php"; 
        } else {
            event.preventDefault();
            mostrar_mensagem_erro("Usuário ou senha inválida, tente novamente.");
            setTimeout(limpar_mensagem_erro,1000); 
        }
    });

    function mostrar_mensagem_erro(mensagem) {
        limpar_mensagem_erro(); 
        var paragrafo = document.createElement("p");
        paragrafo.textContent = mensagem;
        paragrafo.id = "mensagem_erro"; 
        formulario.appendChild(paragrafo);
    }

    function limpar_mensagem_erro() {
        var mensagem_erro = document.getElementById("mensagem_erro");
        if (mensagem_erro) {
            mensagem_erro.remove();
        }
    }
};
