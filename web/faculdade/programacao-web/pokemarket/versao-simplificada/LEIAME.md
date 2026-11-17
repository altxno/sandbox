# Pokemarket

O Pokemarket é uma loja fictícia de Pokémon feita para praticar HTML, CSS e JavaScript. Na página inicial, a vitrine escolhe cinco Pokémon de uma lista de vinte. Dá para sortear outro grupo, reservar Pokémon e acompanhar os pedidos feitos.

## Como abrir

Abra o arquivo `index.html` no navegador. Use o menu do cabeçalho para ir à vitrine, ao carrinho, aos pedidos ou às páginas de login e cadastro. As imagens dos Pokémon vêm da internet, então precisam de conexão para aparecer.

## Arquivos do projeto

- `index.html` contém o cabeçalho, a introdução e o espaço onde o JavaScript monta a vitrine.
- `pages/login.html` e `pages/cadastro.html` têm os formulários de acesso e criação de conta.
- `pages/editar-conta.html` permite trocar o nome de usuário e a senha. Depois de entrar, clique no nome exibido no cabeçalho para abrir essa página.
- `pages/carrinho.html` mostra os Pokémon reservados e o valor total.
- `pages/pedidos.html` mostra os pedidos que já foram finalizados.
- `styles.css` reúne os estilos usados em todas as páginas. Os comentários dividem o arquivo por área.
- `scripts.js` reúne as funções de login, cadastro, sorteio da vitrine, carrinho e pedidos.
- `assets` guarda as imagens próprias usadas pelo site, como o logo.

## Como os dados são guardados

As contas, os carrinhos, os pedidos e o grupo atual da vitrine ficam no `localStorage` do navegador. A sessão de quem entrou fica no `sessionStorage`. Carrinhos e pedidos usam o nome da conta para separar os dados de cada usuário. Se o nome mudar, o site também atualiza as chaves do carrinho e dos pedidos. O campo de senha pode ficar vazio para manter a senha atual.

Como o projeto é demonstrativo e não tem servidor, os dados ficam apenas no navegador usado para abrir o site. O cadastro também é simples: serve para demonstrar formulários e armazenamento local, não para proteger contas reais.

Para apagar os dados de demonstração, abra as ferramentas do navegador, procure **Armazenamento local** (ou **Application**) e limpe os dados deste site.
