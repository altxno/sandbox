function obterChavePedidos() {
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    return usuarioLogado ? 'pedidos_' + usuarioLogado.nome : 'pedidos_convidado';
}

function mostrarPedidos() {
    const pedidos = JSON.parse(localStorage.getItem(obterChavePedidos())) || [];
    const listaPedidos = document.getElementById('listaPedidos');

    if (pedidos.length === 0) {
        listaPedidos.textContent = 'Você ainda não fez nenhum pedido.';
        return;
    }

    listaPedidos.innerHTML = '';

    pedidos.forEach(function (pedido, indice) {
        const caixaPedido = document.createElement('section');
        caixaPedido.className = 'pedido';

        const itens = pedido.itens.map(function (pokemon) {
            return `<li>${pokemon.nome} — Nv. ${pokemon.nivel} — R$ ${pokemon.preco}</li>`;
        }).join('');

        caixaPedido.innerHTML = `
            <h2>Pedido ${indice + 1}</h2>
            <p>Data: ${pedido.data}</p>
            <ul>${itens}</ul>
            <p class="pedido-total"><strong>Total: R$ ${pedido.total}</strong></p>
        `;

        listaPedidos.appendChild(caixaPedido);
    });
}

mostrarPedidos();
