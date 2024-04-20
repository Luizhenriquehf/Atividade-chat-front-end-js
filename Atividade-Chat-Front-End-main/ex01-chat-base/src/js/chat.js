function enviarMensagem() {
    let usuarioInput = document.querySelector("#usuario-input").value;

    let chatTotal = document.querySelector("#chat-conteudo");

    let novaMensagem = document.createElement("div");
    novaMensagem.classList.add("clienteM");

    let titulo = document.createElement("h4");
    titulo.textContent = "Cliente";
    novaMensagem.appendChild(titulo);

    let conteudo = document.createElement("p");
    conteudo.textContent = usuarioInput;
    novaMensagem.appendChild(conteudo);

    chatTotal.appendChild(novaMensagem);
}