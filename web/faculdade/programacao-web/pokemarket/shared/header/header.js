function renderizarHeader() {
    const header = document.getElementById('navbar');
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    const linkUsuario = usuarioLogado ?
        `<li>Agente: ${usuarioLogado.nome}</li> 
        <li><button type="button" id="btn-logout">Sair</button></li>`
        :
        `<li><a href="/pokemarket/pages/auth/login/login.html">Login</a></li>`;

    header.innerHTML = `
        <nav class="navbar-container">
            <div class="navbar-logo">
                <div class="navbar-logoImg">
                    <img src="/pokemarket/assets/rocketLogo.png" alt="">
                </div>
                <a href="/pokemarket/index.html">Pokemarket</a>
            </div>

            <ul class="navbar-links">
                <li><a href="/pokemarket/index.html">Home</a></li>
                <li><a href="/pokemarket/pages/carrinho/carrinho.html">Carrinho</a></li>
                <li><a href="/pokemarket/pedidos.html">Pedidos</a></li>
                <li><a href="/pokemarket/sobre.html">Sobre</a></li>
                ${linkUsuario}
            </ul>
        </nav>
    `;

    const botaoSair = document.getElementById('btn-logout');

    if (botaoSair) {
        botaoSair.addEventListener('click', function () {
            sessionStorage.removeItem('usuarioLogado');
            window.location.href = '/pokemarket/index.html';
        });
    }
}

renderizarHeader();
