function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itensCarrinho = document.getElementById('itensCarrinho');
    const totalCarrinho = document.getElementById('totalCarrinho');

    itensCarrinho.innerHTML = '';
    let total = 0;

    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = '<tr><td colspan="5">Seu carrinho está vazio.</td></tr>';
    }

    carrinho.forEach(function (pokemon, indice) {
        total += pokemon.preco;

        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${pokemon.nome}</td>
            <td>${pokemon.tipo}</td>
            <td>${pokemon.nivel}</td>
            <td>R$ ${pokemon.preco.toLocaleString('pt-BR')}</td>
            <td><button type="button" onclick="removerDoCarrinho(${indice})">Remover</button></td>
        `;
        itensCarrinho.appendChild(linha);
    });

    totalCarrinho.textContent = 'R$ ' + total.toLocaleString('pt-BR');
}

function removerDoCarrinho(indice) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(indice, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarCarrinho();
}

function finalizarPedido() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    if (carrinho.length > 100) {
        alert('O limite é de 100 Pokémon por pedido.');
        return;
    }

    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    const total = carrinho.reduce(function (soma, pokemon) {
        return soma + pokemon.preco;
    }, 0);

    pedidos.push({
        data: new Date().toLocaleString('pt-BR'),
        itens: carrinho,
        total: total
    });

    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    localStorage.removeItem('carrinho');
    window.location.href = '../pedidos/pedidos.html';
}

mostrarCarrinho();
