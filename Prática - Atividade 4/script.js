// Selecionar os elementos do DOM
const form = document.querySelector("#formCadastro");
const listaDOM = document.querySelector("#listaPecas");
const btnLimpar = document.querySelector("#btnLimpar");

// 6. Persistir: chamar a exibição ao carregar a página
carregarRegistos();

function carregarRegistos() {
    // 3. Recuperar lista com getItem e JSON.parse. Se estiver vazio, inicia com array vazio
    const dadosJSON = localStorage.getItem("pecasMota");
    const registos = dadosJSON ? JSON.parse(dadosJSON) : [];

    // Limpar a lista no DOM antes de a desenhar novamente
    listaDOM.innerHTML = "";

    // 5. Mostrar: percorrer com for...of e desenhar no DOM
    for (const peca of registos) {
        const item = document.createElement("li");
        item.textContent = `Peça: ${peca.nome} | Qtd: ${peca.quantidade} | Preço: R$${peca.preco}`;
        listaDOM.appendChild(item);
    }
}

// 1. Formulário: capturar valores no submit (com preventDefault)
form.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Impede que a página recarregue

    // Converter os valores para números onde necessário
    const nomeValor = document.querySelector("#nomePeca").value;
    const quantidadeValor = Number(document.querySelector("#quantidade").value);
    const precoValor = Number(document.querySelector("#preco").value);

    // 2. Criar objeto: juntar os valores num único registo
    const novaPeca = {
        nome: nomeValor,
        quantidade: quantidadeValor,
        preco: precoValor
    };

    // 3. Recuperar a lista atual para garantir que não apagamos o que já lá está
    const dadosJSON = localStorage.getItem("pecasMota");
    const registos = dadosJSON ? JSON.parse(dadosJSON) : [];

    // 4. Adicionar e salvar: push() para o array e depois JSON.stringify + setItem
    registos.push(novaPeca);
    localStorage.setItem("pecasMota", JSON.stringify(registos));

    // Atualizar o DOM para refletir o novo registo e limpar os campos
    carregarRegistos();
    form.reset();
});

// Ação extra: Um botão para limpar os registos
btnLimpar.addEventListener("click", function() {
    // Removemos a chave do localStorage
    localStorage.removeItem("pecasMota");
    // Atualizamos a interface para refletir que o catálogo está vazio
    carregarRegistos();
});