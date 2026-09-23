// Seleciona o botão que leva o usuário para a seção "Sobre".
const botaoConhecer = document.getElementById("botaoConhecer");

// Seleciona a seção "Sobre".
const secaoSobre = document.getElementById("sobre");

// Adiciona um evento de clique ao botão "Conhecer".
botaoConhecer.addEventListener("click", function() {

    // Faz a página rolar suavemente até a seção "Sobre".
    secaoSobre.scrollIntoView({ behavior: "smooth" });

});


// Seleciona o botão responsável por mostrar mais informações.
const botaoMais = document.getElementById("botaoMais");

// Seleciona o texto que será mostrado ou escondido.
const textoMais = document.getElementById("textoMais");

// Adiciona um evento de clique ao botão.
botaoMais.addEventListener("click", function() {

    // Verifica se o texto está escondido.
    if (textoMais.classList.contains("oculto")) {

        // Remove a classe que esconde o texto.
        textoMais.classList.remove("oculto");

        // Altera o texto do botão.
        botaoMais.textContent = "Mostrar menos";

    } else {

        // Adiciona novamente a classe que esconde o texto.
        textoMais.classList.add("oculto");

        // Altera o texto do botão.
        botaoMais.textContent = "Leia mais";

    }

});


// Seleciona o formulário.
const formulario = document.getElementById("formulario");

// Seleciona o campo onde o usuário digita o nome.
const campoNome = document.getElementById("nome");

// Seleciona o local onde a mensagem será exibida.
const mensagem = document.getElementById("mensagem");

// Adiciona um evento quando o usuário envia o formulário.
formulario.addEventListener("submit", function(event) {

    // Impede que a página seja recarregada.
    event.preventDefault();

    // Pega o texto digitado pelo usuário.
    const nome = campoNome.value;

    // Verifica se o campo está vazio.
    if (nome.trim() === "") {

        // Mostra uma mensagem de aviso.
        mensagem.textContent = "Por favor, digite seu nome.";

        // Altera a aparência da mensagem.
        mensagem.style.color = "#b44a3a";

    } else {

        // Mostra uma mensagem personalizada usando o nome digitado.
        mensagem.textContent = "Olá, " + nome + "! Obrigado por conhecer o Quilombo Pacoval.";

        // Altera a aparência da mensagem.
        mensagem.style.color = "#2f5d50";

        // Limpa o campo depois do envio.
        campoNome.value = "";

    }

});


// Adiciona um evento enquanto o usuário digita o nome.
campoNome.addEventListener("input", function() {

    // Verifica se o campo possui algum texto.
    if (campoNome.value.length > 0) {

        // Altera a aparência da borda do campo.
        campoNome.style.borderColor = "#c98b2e";

    } else {

        // Volta a borda para a aparência original.
        campoNome.style.borderColor = "";

    }

});


// Seleciona o botão de modo noturno.
const botaoModo = document.getElementById("botaoModo");

// Seleciona o elemento principal da página.
const corpoPagina = document.body;

// Adiciona um evento de clique no botão de modo noturno.
botaoModo.addEventListener("click", function() {

    // Adiciona ou remove a classe de modo noturno.
    corpoPagina.classList.toggle("modo-noturno");

    // Verifica se o modo noturno está ativado.
    if (corpoPagina.classList.contains("modo-noturno")) {

        // Altera a dica de acessibilidade do botão para o modo claro sem apagar o ícone.
        botaoModo.title = "Ativar modo claro";

    } else {

        // Altera a dica de acessibilidade do botão para o modo noturno sem apagar o ícone.
        botaoModo.title = "Ativar modo noturno";

    }

});