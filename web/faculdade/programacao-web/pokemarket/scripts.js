// ----------------------------------HEADER------------------------------------------
function renderizarHeader() {

    const header = document.getElementById('navbar');
    if (!header) {
        return;
    }
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    header.innerHTML = `
        <nav class="navbar-container">
            <div class="navbar-logo">
                <a href="index.html">
                    Pokemarket
                </a>
            </div>
        
            <ul class="navbar-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="carrinho.html">Carrinho</a></li>
                <li><a href="pedidos.html">Pedidos</a></li>
                <li><a href="sobre.html">Sobre</a></li>
                <li class="navbar-auth">
                    ${usuarioLogado
                    ? `Agente: ${usuarioLogado.nome} <button type="button" id="btn-logout">Sair</button>`
                    : `<a href="login.html" class="btn-login">Login</a>`
                    }
                </li>
            </ul>
        
        </nav>
    `

    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            sessionStorage.removeItem('usuarioLogado');
            window.location.href = 'login.html';
        });
    }
}
document.addEventListener('DOMContentLoaded', renderizarHeader);
// ---------------------------------------------------------------------------------


// ---------------------------------- VITRINE -----------------------------------------
async function carregarVitrine() {
    const vitrine = document.getElementById('vitrine');
    if (!vitrine) return;

    const ids = new Set();
    while (ids.size < 10) {
        ids.add(Math.floor(Math.random() * 1025) + 1);
    }

    const promessas = Array.from(ids).map(async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        return {
            id: data.id,
            nome: data.name,
            imagem: data.sprites.other['official-artwork'].front_default,
            tipo: data.types[0].type.name,
            nivel: Math.floor(Math.random() * 80) + 20,
            preco: (Math.floor(Math.random() * 50) + 10) * 100
        };
    });

    const lote = await Promise.all(promessas);
    localStorage.setItem('loteAtual', JSON.stringify(lote));
    renderizarCards(lote);
}

function renderizarCards(lista) {
    const vitrine = document.getElementById('vitrine');
    if (!vitrine) return;

    vitrine.innerHTML = '';

    lista.forEach((poke) => {
        const card = document.createElement('div');
        card.className = 'card-pokemon';

        card.innerHTML = `
            <span>#${poke.id} - Nv. ${poke.nivel}</span>
            <img src="${poke.imagem}" alt="${poke.nome}">
            <h3>${poke.nome.toUpperCase()}</h3>
            <p>Tipo: ${poke.tipo}</p>
            <strong>R$ ${poke.preco}</strong>
            <button type="button" onclick="adicionarAoCarrinho(${poke.id})">Reservar</button>
        `;

        vitrine.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', carregarVitrine);