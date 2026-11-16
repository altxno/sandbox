function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itensCarrinho = document.getElementById('itensCarrinho');
    const totalCarrinho = document.getElementById('totalCarrinho');

    itensCarrinho.innerHTML = '';
    let total = 0;

    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = '<tr><td colspan="5">Seu carrinho está vazio.</td></tr>';
    }

    carrinho.forEach(function (pokemon) {
        total += pokemon.preco;

        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${pokemon.nome}</td>
            <td>${pokemon.tipo}</td>
            <td>${pokemon.nivel}</td>
            <td>R$ ${pokemon.preco.toLocaleString('pt-BR')}</td>
            <td><button type="button" onclick="removerDoCarrinho(${pokemon.id})">Remover</button></td>
        `;
        itensCarrinho.appendChild(linha);
    });

    totalCarrinho.textContent = 'R$ ' + total.toLocaleString('pt-BR');
}

function removerDoCarrinho(idPokemon) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(function (pokemon) {
        return pokemon.id !== idPokemon;
    });

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarCarrinho();
}

mostrarCarrinho();
