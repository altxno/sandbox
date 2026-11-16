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
                <div class="navbar-logoImg"> 
                    <img src="rocketLogo.png" alt="">
                </div>      
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
                    : `<a href="Login/login.html" class="btn-login">Login</a>`
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
const catalogoPokemons = [
    { id: 6, nome: "Charizard", tipo: "Fogo/Voador", nivel: 65, preco: 4500, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
    { id: 9, nome: "Blastoise", tipo: "Água", nivel: 60, preco: 4200, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
    { id: 25, nome: "Pikachu", tipo: "Elétrico", nivel: 45, preco: 3000, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
    { id: 94, nome: "Gengar", tipo: "Fantasma/Venenoso", nivel: 58, preco: 4800, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" },
    { id: 130, nome: "Gyarados", tipo: "Água/Voador", nivel: 55, preco: 3900, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png" },
    { id: 143, nome: "Snorlax", tipo: "Normal", nivel: 50, preco: 3500, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" },
    { id: 149, nome: "Dragonite", tipo: "Dragão/Voador", nivel: 70, preco: 6000, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png" },
    { id: 150, nome: "Mewtwo", tipo: "Psíquico", nivel: 85, preco: 9500, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" },
    { id: 197, nome: "Umbreon", tipo: "Sombrio", nivel: 48, preco: 3700, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png" },
    { id: 212, nome: "Scizor", tipo: "Inseto/Metal", nivel: 52, preco: 4100, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png" },
    { id: 248, nome: "Tyranitar", tipo: "Pedra/Sombrio", nivel: 68, preco: 5800, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png" },
    { id: 448, nome: "Lucario", tipo: "Lutador/Metal", nivel: 54, preco: 4400, imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png" }
];

function gerarNovoLote() {
    const embaralhado = [...catalogoPokemons].sort(() => Math.random() - 0.5);
    const lote = embaralhado.slice(0, 10);

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
            <h3>${poke.nome}</h3>
            <p>Tipo: ${poke.tipo}</p>
            <strong>R$ ${poke.preco}</strong>
            <button type="button" onclick="adicionarAoCarrinho(${poke.id})">Reservar</button>
        `;

        vitrine.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const loteSalvo = JSON.parse(localStorage.getItem('loteAtual'));
    if (loteSalvo && loteSalvo.length > 0) {
        renderizarCards(loteSalvo);
    } else {
        gerarNovoLote();
    }
});