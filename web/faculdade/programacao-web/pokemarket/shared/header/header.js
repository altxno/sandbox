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
                    <img src="assets/rocketLogo.png" alt="">
                </div>
                <a href="index.html">Pokemarket</a>
            </div>

            <ul class="navbar-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="carrinho.html">Carrinho</a></li>
                <li><a href="pedidos.html">Pedidos</a></li>
                <li><a href="sobre.html">Sobre</a></li>
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
