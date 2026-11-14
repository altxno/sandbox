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