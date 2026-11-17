// essa funcao verifica a chave de usuarioLogado no sessionstorage e esconde/mostra os botoes com base nisso
// tambem tem o botao de sair que limpa a chave usuarioLogado da sessionstorage
function atualizarCabecalho() {
    const textoUsuario = sessionStorage.getItem('usuarioLogado');
    const linkLogin = document.getElementById('linkLogin');
    const nomeUsuario = document.getElementById('nomeUsuario');
    const botaoSair = document.getElementById('botaoSair');
    if (textoUsuario !== null && nomeUsuario !== null) {
        const usuario = JSON.parse(textoUsuario);
        linkLogin.hidden = true;
        nomeUsuario.hidden = false;
        nomeUsuario.textContent = 'Olá, ' + usuario.nome;
        botaoSair.hidden = false;
        botaoSair.addEventListener('click', function () {
            sessionStorage.removeItem('usuarioLogado');
            window.location.href = linkLogin.href;
        });
    }
}

// pega todos os usuarios do localstorage, verifica se é diferente de nulo e coloca dentro de um array se for true
// depois roda um loop for com o nome+senha que voce digitou pra ver se bate com algum dos usuarios no localstorage
// se bater ele atualiza a sessao e a chave usuariologado para o atual e manda voce logado pro index
// caso contrario ele so roda uma mensagem de user/senha incorretos
function logar() {
    const textoUsuarios = localStorage.getItem('usuarios');
    let usuarios = [];
    if (textoUsuarios !== null) usuarios = JSON.parse(textoUsuarios);
    const nome = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === nome && usuarios[i].senha === senha) {
            sessionStorage.setItem('usuarioLogado', JSON.stringify({nome: nome}));
            window.location.href = '../index.html';
            return;
        }
    }
    alert('Usuário ou senha incorretos.');
}

// pega todos os usuarios do localstorage, verifica se é diferente de nulo e coloca dentro de um array se for true
// roda um loop for com o nome+senha do forms e verifica se tem algum usuario com o nome ja cadastrado e manda um alerta
// caso contrario, ele faz um push na lista de usuarios do localstorage com o cadastrado, e redireciona para o login
function cadastrar() {
    const textoUsuarios = localStorage.getItem('usuarios');
    let usuarios = [];
    if (textoUsuarios !== null) usuarios = JSON.parse(textoUsuarios);
    const nome = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario.toLowerCase() === nome.toLowerCase()) {
            alert('Este usuário já está cadastrado.');
            return;
        }
    }
    usuarios.push({usuario: nome, senha: senha});
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Conta criada. Agora entre com seu usuário e senha.');
    window.location.href = 'login.html';
}

// metodo sempre carrega, ele é encerrado se nao encontrar o campo novousuario que so existe na pagina de edicao
// caso contrario ele pega o usuario que esta logado no sessionstorage e verifica se esta nulo (deslogado)
// se estiver ele lanca um alerta e manda de para a pagina de login
// caso contrario ele pega o nome na chave, faz o parse, e coloca no input (geralmente nao se edita o nome)
function carregarFormularioEdicao() {
    const campoUsuario = document.getElementById('novoUsuario');
    if (campoUsuario === null) return;

    const textoSessao = sessionStorage.getItem('usuarioLogado');
    if (textoSessao === null) {
        alert('Entre na sua conta para editar seus dados.');
        window.location.href = 'login.html';
        return;
    }

    const usuarioLogado = JSON.parse(textoSessao);
    campoUsuario.value = usuarioLogado.nome;
}

// verifica se a chave do sessionstorage usuairologado esta nula e lanca um alerta e redirecionamento se for true
// caso contrario ele pega a chave de sessao com o parse, pega o nome+senha do forms
// pega agora todos os usuarios no localstorage e coloca no array se for diferente de nulo
function editarConta() {
    const textoSessao = sessionStorage.getItem('usuarioLogado');
    if (textoSessao === null) {
        alert('Entre na sua conta para editar seus dados.');
        window.location.href = 'login.html';
        return;
    }

    const usuarioLogado = JSON.parse(textoSessao);
    const nomeAntigo = usuarioLogado.nome;
    const novoNome = document.getElementById('novoUsuario').value.trim();
    const novaSenha = document.getElementById('novaSenha').value;
    const textoUsuarios = localStorage.getItem('usuarios');
    let usuarios = [];
    if (textoUsuarios !== null) usuarios = JSON.parse(textoUsuarios);

    // primeiro loop pra achar a posicao que se encontra a conta do usuario para editar
    // segundo loop ve se algum nome de usuario dentre todos corresponde ao novo nome inserido, exceto pela propria posicao

    let indiceUsuario = -1;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === nomeAntigo) indiceUsuario = i;
    }

    for (let i = 0; i < usuarios.length; i++) {
        if (i !== indiceUsuario && usuarios[i].usuario.toLowerCase() === novoNome.toLowerCase()) {
            alert('Este nome já está sendo usado por outra conta.');
            return;
        }
    }

    // se o indice nao for alterado significa que nao encontrou a posicao da conta, limpa a sessao, redireciona login e encerra o metodo
    if (indiceUsuario === -1) {
        alert('Não foi possível encontrar sua conta. Entre novamente.');
        sessionStorage.removeItem('usuarioLogado');
        window.location.href = 'login.html';
        return;
    }

    // passadas as validacoes com sucesso, ele pega a sua posicao e altera o nome+senha, e seta no localstorage
    // se o nome novo for diferente do atual ele roda os metodos para editar as chaves correspondentes em carrinho e pedidos
    // e depois seta o nome do usuariologado no sessionstorage
    usuarios[indiceUsuario].usuario = novoNome
    if (novaSenha !== '') usuarios[indiceUsuario].senha = novaSenha;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    if (nomeAntigo !== novoNome) {
        moverDadosDaConta('carrinho_', nomeAntigo, novoNome);
        moverDadosDaConta('pedidos_', nomeAntigo, novoNome);
    }

    sessionStorage.setItem('usuarioLogado', JSON.stringify({nome: novoNome}));
    alert('Seus dados foram atualizados.');
    window.location.href = '../index.html';
}

// metodo para atualizar a chave identificadora (nome) no carrinho+pedidos
// cria duas variaveis, uma com dados antigos e outra com novos
// le os dados antigos do localstorage, se for diferente de nulo,
// ele pega os dados antigos e coloca na chave nova, em seguida exclui a chave antiga
function moverDadosDaConta(tipoDeDados, nomeAntigo, novoNome) {
    const chaveAntiga = tipoDeDados + nomeAntigo;
    const chaveNova = tipoDeDados + novoNome;
    const dadosAntigos = localStorage.getItem(chaveAntiga);
    if (dadosAntigos !== null) {
        localStorage.setItem(chaveNova, dadosAntigos);
        localStorage.removeItem(chaveAntiga);
    }
}

// verifica se tem alguem logado usando sessionstorage e cria a chave carrinho_ + nome
// caso contrario cria uma chave carrinho_convidado
function obterChaveCarrinho() {
    const textoUsuario = sessionStorage.getItem('usuarioLogado');
    if (textoUsuario === null) return 'carrinho_convidado';
    const usuario = JSON.parse(textoUsuario);
    return 'carrinho_' + usuario.nome;
}

// verifica se tem alguem logado usando sessionstorage e cria a chave pedidos_ + nome
// caso contrario cria uma chave pedidos_convidado
function obterChavePedidos() {
    const textoUsuario = sessionStorage.getItem('usuarioLogado');
    if (textoUsuario === null) return 'pedidos_convidado';
    const usuario = JSON.parse(textoUsuario);
    return 'pedidos_' + usuario.nome;
}

// le o carrinho usando nome em sessionstorage, se tiver nulo retorna vazio
// caso contrario retorna o json do carrinho
function lerCarrinho() {
    const textoCarrinho = localStorage.getItem(obterChaveCarrinho());
    if (textoCarrinho === null) return [];
    return JSON.parse(textoCarrinho);
}

// verifica se o usuario esta logado com base no sessionstorage
// se nao estiver, lanca uma mensagem de aviso caso contrario retorna true
function verificarLogin() {
    const textoUsuario = sessionStorage.getItem('usuarioLogado');
    if (textoUsuario === null) {
        alert('Entre na sua conta para reservar Pokémon.');
        const linkLogin = document.getElementById('linkLogin');
        window.location.href = linkLogin.href;
        return false;
    }
    return true;
}

// adiciona ao carrinho se estiver logado e carrinho<=10
// push no localstorage usando metodo obterChaveCarrinho() + json.stringfy(carrinho)
function adicionarAoCarrinho(id, nome, tipo, nivel, preco) {
    if (verificarLogin() === false) return;

    const carrinho = lerCarrinho();
    if (carrinho.length >= 10) {
        alert('O limite é de 10 Pokémon por pedido.');
        return;
    }
    if (confirm('Deseja reservar ' + nome + '?') === false) return;
    carrinho.push({id: id, nome: nome, tipo: tipo, nivel: nivel, preco: preco});
    localStorage.setItem(obterChaveCarrinho(), JSON.stringify(carrinho));
    alert(nome + ' foi adicionado ao carrinho.');
}

// verifica se tem algo na tabela e encerra se estiver vazio
// injeta o codigo html + dados pra montar a tabela do carrinho
function mostrarCarrinho() {
    const carrinho = lerCarrinho();
    const tabela = document.getElementById('itensCarrinho'); // tbody
    const totalTexto = document.getElementById('totalCarrinho');
    if (tabela === null) return;
    let total = 0;
    tabela.textContent = '';
    if (carrinho.length === 0) {
        const linha = document.createElement('tr');
        const celula = document.createElement('td');
        celula.colSpan = 5;
        celula.textContent = 'Seu carrinho está vazio.'; // texto da linha ocupando 5 colspan
        linha.appendChild(celula); // junta a celula acima na linha
        tabela.appendChild(linha); // junta a linha acima na tabela
    }
    for (let i = 0; i < carrinho.length; i++) {
        const pokemon = carrinho[i];
        const linha = document.createElement('tr');
        const valores = [pokemon.nome, pokemon.tipo, pokemon.nivel, 'R$ ' + pokemon.preco];
        for (let j = 0; j < valores.length; j++) {
            const celula = document.createElement('td');
            celula.textContent = valores[j];
            linha.appendChild(celula);
        }
        const acao = document.createElement('td');
        const botao = document.createElement('button');
        botao.textContent = 'Remover';
        botao.addEventListener('click', function () {
            removerDoCarrinho(i);
        });
        acao.appendChild(botao);
        linha.appendChild(acao);
        tabela.appendChild(linha);
        total = total + pokemon.preco;
    }
    totalTexto.textContent = 'R$ ' + total;
}

// recebe a posicao que quer ser removida e faz um for loop ate encontrar
// cria um array na memoria e preenche ele todos exceto com o indice informado
// depois substitui o carrinho que esta na chave pelo array novo criado
function removerDoCarrinho(indice) {
    const carrinho = lerCarrinho();
    const novoCarrinho = [];
    for (let i = 0; i < carrinho.length; i++) {
        if (i !== indice) novoCarrinho.push(carrinho[i]);
    }
    localStorage.setItem(obterChaveCarrinho(), JSON.stringify(novoCarrinho));
    mostrarCarrinho();
}

// verifica primeiro se o carrinho esta vazio
// recupera qual a chave de pedidos no localstorage e se ela eh diferente de nulo para fazer o parse
// roda um loop for incrementando o total com carrinho[i].preco
// ainda no loop ele envia o carrinho finalizado para a chave de pedidos no localstorage acrescentando a data
// faz o parse e envia o carrinho para o historico de pedidos, depois remove a chave atual do carrinho para limpar
function finalizarPedido() {
    if (verificarLogin() === false) return;

    const carrinho = lerCarrinho();
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }
    const textoPedidos = localStorage.getItem(obterChavePedidos());
    let pedidos = [];
    if (textoPedidos !== null) pedidos = JSON.parse(textoPedidos);
    let total = 0;
    for (let i = 0; i < carrinho.length; i++) total = total + carrinho[i].preco;
    pedidos.push({data: new Date().toLocaleString('pt-BR'), itens: carrinho, total: total});
    localStorage.setItem(obterChavePedidos(), JSON.stringify(pedidos));
    localStorage.removeItem(obterChaveCarrinho());
    window.location.href = 'pedidos.html';
}


function mostrarPedidos() {
    const lista = document.getElementById('listaPedidos');
    if (lista === null) return;
    const textoPedidos = localStorage.getItem(obterChavePedidos());
    if (textoPedidos === null || JSON.parse(textoPedidos).length === 0) {
        lista.textContent = 'Você ainda não fez nenhum pedido.';
        return;
    }
    const pedidos = JSON.parse(textoPedidos);
    for (let i = 0; i < pedidos.length; i++) {
        const pedido = pedidos[i];
        const caixa = document.createElement('section');
        caixa.className = 'pedido';
        const titulo = document.createElement('h2');
        titulo.textContent = 'Pedido ' + (i + 1);
        caixa.appendChild(titulo);
        const data = document.createElement('p');
        data.textContent = 'Data: ' + pedido.data;
        caixa.appendChild(data);
        const itens = document.createElement('ul');
        for (let j = 0; j < pedido.itens.length; j++) {
            const item = document.createElement('li');
            item.textContent = pedido.itens[j].nome + ' — Nv. ' + pedido.itens[j].nivel + ' — R$ ' + pedido.itens[j].preco;
            itens.appendChild(item);
        }
        caixa.appendChild(itens);
        const total = document.createElement('strong');
        total.textContent = 'Total: R$ ' + pedido.total;
        caixa.appendChild(total);
        lista.appendChild(caixa);
    }
}

const pokemons = [
  { id: 1, nome: 'Bulbasaur', tipo: 'Grama/Venenoso', nivel: 18, preco: 1200 },
  { id: 4, nome: 'Charmander', tipo: 'Fogo', nivel: 16, preco: 1300 },
  { id: 6, nome: 'Charizard', tipo: 'Fogo/Voador', nivel: 65, preco: 4500 },
  { id: 7, nome: 'Squirtle', tipo: 'Água', nivel: 15, preco: 1200 },
  { id: 9, nome: 'Blastoise', tipo: 'Água', nivel: 60, preco: 4200 },
  { id: 25, nome: 'Pikachu', tipo: 'Elétrico', nivel: 45, preco: 3000 },
  { id: 37, nome: 'Vulpix', tipo: 'Fogo', nivel: 24, preco: 1800 },
  { id: 39, nome: 'Jigglypuff', tipo: 'Normal/Fada', nivel: 20, preco: 1500 },
  { id: 52, nome: 'Meowth', tipo: 'Normal', nivel: 22, preco: 1600 },
  { id: 54, nome: 'Psyduck', tipo: 'Água', nivel: 25, preco: 1700 },
  { id: 58, nome: 'Growlithe', tipo: 'Fogo', nivel: 28, preco: 1900 },
  { id: 63, nome: 'Abra', tipo: 'Psíquico', nivel: 12, preco: 1000 },
  { id: 66, nome: 'Machop', tipo: 'Lutador', nivel: 20, preco: 1400 },
  { id: 74, nome: 'Geodude', tipo: 'Pedra/Terra', nivel: 19, preco: 1300 },
  { id: 77, nome: 'Ponyta', tipo: 'Fogo', nivel: 30, preco: 2100 },
  { id: 81, nome: 'Magnemite', tipo: 'Elétrico/Metal', nivel: 24, preco: 1800 },
  { id: 92, nome: 'Gastly', tipo: 'Fantasma/Venenoso', nivel: 20, preco: 1700 },
  { id: 94, nome: 'Gengar', tipo: 'Fantasma/Venenoso', nivel: 58, preco: 4800 },
  { id: 143, nome: 'Snorlax', tipo: 'Normal', nivel: 50, preco: 3500 },
  { id: 150, nome: 'Mewtwo', tipo: 'Psíquico', nivel: 85, preco: 9500 }
];


function sortearPokemons() {
  const pokemonsSorteados = [];
  while (pokemonsSorteados.length < 5) {
    const posicaoAleatoria = Math.floor(Math.random() * pokemons.length);
    const pokemonSorteado = pokemons[posicaoAleatoria];
    let jaFoiSorteado = false;
    for (let i = 0; i < pokemonsSorteados.length; i++) {
      if (pokemonsSorteados[i].id === pokemonSorteado.id) jaFoiSorteado = true;
    }
    if (jaFoiSorteado === false) pokemonsSorteados.push(pokemonSorteado);
  }
  localStorage.setItem('pokemonsDaVitrine', JSON.stringify(pokemonsSorteados));
  mostrarPokemons(pokemonsSorteados);
}

function mostrarPokemons(listaPokemons) {
  const vitrine = document.getElementById('vitrine');
  if (vitrine === null) return;
  vitrine.textContent = '';
  for (let i = 0; i < listaPokemons.length; i++) {
    const pokemon = listaPokemons[i];
    const card = document.createElement('article');
    card.className = 'card-pokemon';
    const imagem = document.createElement('img');
    imagem.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png';
    imagem.alt = pokemon.nome;
    card.appendChild(imagem);
    const nome = document.createElement('h2');
    nome.textContent = pokemon.nome;
    card.appendChild(nome);
    const descricao = document.createElement('p');
    descricao.textContent = pokemon.tipo + ' · Nível ' + pokemon.nivel;
    card.appendChild(descricao);
    const preco = document.createElement('strong');
    preco.textContent = 'R$ ' + pokemon.preco;
    card.appendChild(preco);
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.textContent = 'Reservar';
    botao.addEventListener('click', function () {
      adicionarAoCarrinho(pokemon.id, pokemon.nome, pokemon.tipo, pokemon.nivel, pokemon.preco);
    });
    card.appendChild(botao);
    vitrine.appendChild(card);
  }
}

function carregarVitrine() {
  const textoSalvo = localStorage.getItem('pokemonsDaVitrine');
  if (textoSalvo === null) {
    sortearPokemons();
  } else {
    mostrarPokemons(JSON.parse(textoSalvo));
  }
}

atualizarCabecalho();
carregarFormularioEdicao();
carregarVitrine();
mostrarCarrinho();
mostrarPedidos();
