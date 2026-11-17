function obterChaveCarrinho() {
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    return usuarioLogado ? 'carrinho_' + usuarioLogado.nome : 'carrinho_convidado';
}

function obterChavePedidos() {
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    return usuarioLogado ? 'pedidos_' + usuarioLogado.nome : 'pedidos_convidado';
}

function mostrarCarrinho() {
    const chaveCarrinho = obterChaveCarrinho();
    const carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];
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
            <td>R$ ${pokemon.preco}</td>
            <td><button type="button" onclick="removerDoCarrinho(${indice})">Remover</button></td>
        `;
        itensCarrinho.appendChild(linha);
    });

    totalCarrinho.textContent = 'R$ ' + total;
}

function removerDoCarrinho(indice) {
    const chaveCarrinho = obterChaveCarrinho();
    const carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];
    carrinho.splice(indice, 1);
    localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
    mostrarCarrinho();
}

function finalizarPedido() {
    const chaveCarrinho = obterChaveCarrinho();
    const carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];

    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    if (carrinho.length > 100) {
        alert('O limite é de 100 Pokémon por pedido.');
        return;
    }

    const chavePedidos = obterChavePedidos();
    const pedidos = JSON.parse(localStorage.getItem(chavePedidos)) || [];
    const total = carrinho.reduce(function (soma, pokemon) {
        return soma + pokemon.preco;
    }, 0);

    pedidos.push({
        data: new Date().toLocaleString('pt-BR'),
        itens: carrinho,
        total: total
    });

    localStorage.setItem(chavePedidos, JSON.stringify(pedidos));
    localStorage.removeItem(chaveCarrinho);
    window.location.href = '../pedidos/pedidos.html';
}

mostrarCarrinho();
