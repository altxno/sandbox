function renderizarHeader() {
    const header = document.getElementById('navbar');
    if (!header) return;

    const raiz = header.dataset.raiz || '';
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    const linkUsuario = usuarioLogado
        ? `<li>Agente: ${usuarioLogado.nome}</li>
           <li><button type="button" id="btn-logout">Sair</button></li>`
        : `<li><a href="${raiz}pages/auth/login/login.html">Login</a></li>`;

    header.innerHTML = `
        <nav class="navbar-container">
            <div class="navbar-logo">
                <div class="navbar-logoImg">
                    <img src="${raiz}assets/rocketLogo.png" alt="">
                </div>
                <a href="${raiz}index.html">Pokemarket</a>
            </div>

            <ul class="navbar-links">
                <li><a href="${raiz}index.html">Home</a></li>
                <li><a href="${raiz}pages/carrinho/carrinho.html">Carrinho</a></li>
                <li><a href="${raiz}pages/pedidos/pedidos.html">Pedidos</a></li>
                ${linkUsuario}
            </ul>
        </nav>
    `;

    const botaoSair = document.getElementById('btn-logout');
    if (botaoSair) {
        botaoSair.addEventListener('click', function () {
            sessionStorage.removeItem('usuarioLogado');
            window.location.href = raiz + 'pages/auth/login/login.html';
        });
    }
}

renderizarHeader();
