function gerarNovoLote() {
    const pokemonsEmbaralhados = [...catalogoPokemons];
    pokemonsEmbaralhados.sort(() => Math.random() - 0.5);

    const lote = pokemonsEmbaralhados.slice(0, 5);
    localStorage.setItem('loteAtualPokemons', JSON.stringify(lote));
    renderizarVitrine(lote);
}

function renderizarVitrine(pokemons) {
    const vitrine = document.getElementById('vitrine');
    vitrine.innerHTML = '';

    pokemons.forEach(function (pokemon) {
        const card = document.createElement('div');
        card.className = 'card-pokemon';
        card.innerHTML = `
            <span>#${pokemon.id} - Nv. ${pokemon.nivel}</span>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.nome}">
            <h3>${pokemon.nome}</h3>
            <p>Tipo: ${pokemon.tipo}</p>
            <strong>R$ ${pokemon.preco}</strong>
            <button type="button" onclick="adicionarAoCarrinho(${pokemon.id})">Reservar</button>
        `;
        vitrine.appendChild(card);
    });
}

const loteSalvo = JSON.parse(localStorage.getItem('loteAtualPokemons'));

if (loteSalvo && loteSalvo.length > 0) {
    renderizarVitrine(loteSalvo.slice(0, 5));
} else {
    gerarNovoLote();
}


const catalogoPokemons = [
    { id: 1, nome: "Bulbasaur", tipo: "Grama/Venenoso", nivel: 18, preco: 1200 },
    { id: 2, nome: "Ivysaur", tipo: "Grama/Venenoso", nivel: 32, preco: 2200 },
    { id: 3, nome: "Venusaur", tipo: "Grama/Venenoso", nivel: 55, preco: 4800 },
    { id: 4, nome: "Charmander", tipo: "Fogo", nivel: 16, preco: 1300 },
    { id: 5, nome: "Charmeleon", tipo: "Fogo", nivel: 34, preco: 2400 },
    { id: 6, nome: "Charizard", tipo: "Fogo/Voador", nivel: 65, preco: 4500 },
    { id: 7, nome: "Squirtle", tipo: "Água", nivel: 15, preco: 1200 },
    { id: 8, nome: "Wartortle", tipo: "Água", nivel: 33, preco: 2300 },
    { id: 9, nome: "Blastoise", tipo: "Água", nivel: 60, preco: 4200 },
    { id: 25, nome: "Pikachu", tipo: "Elétrico", nivel: 45, preco: 3000 },
    { id: 26, nome: "Raichu", tipo: "Elétrico", nivel: 52, preco: 3600 },
    { id: 37, nome: "Vulpix", tipo: "Fogo", nivel: 24, preco: 1800 },
    { id: 38, nome: "Ninetales", tipo: "Fogo", nivel: 48, preco: 3500 },
    { id: 39, nome: "Jigglypuff", tipo: "Normal/Fada", nivel: 20, preco: 1500 },
    { id: 40, nome: "Wigglytuff", tipo: "Normal/Fada", nivel: 38, preco: 2600 },
    { id: 52, nome: "Meowth", tipo: "Normal", nivel: 22, preco: 1600 },
    { id: 53, nome: "Persian", tipo: "Normal", nivel: 42, preco: 2900 },
    { id: 54, nome: "Psyduck", tipo: "Água", nivel: 25, preco: 1700 },
    { id: 55, nome: "Golduck", tipo: "Água", nivel: 45, preco: 3200 },
    { id: 58, nome: "Growlithe", tipo: "Fogo", nivel: 28, preco: 1900 },
    { id: 59, nome: "Arcanine", tipo: "Fogo", nivel: 58, preco: 4100 },
    { id: 63, nome: "Abra", tipo: "Psíquico", nivel: 12, preco: 1000 },
    { id: 64, nome: "Kadabra", tipo: "Psíquico", nivel: 35, preco: 2500 },
    { id: 65, nome: "Alakazam", tipo: "Psíquico", nivel: 62, preco: 4600 },
    { id: 66, nome: "Machop", tipo: "Lutador", nivel: 20, preco: 1400 },
    { id: 67, nome: "Machoke", tipo: "Lutador", nivel: 40, preco: 2800 },
    { id: 68, nome: "Machamp", tipo: "Lutador", nivel: 60, preco: 4300 },
    { id: 74, nome: "Geodude", tipo: "Pedra/Terra", nivel: 19, preco: 1300 },
    { id: 75, nome: "Graveler", tipo: "Pedra/Terra", nivel: 38, preco: 2500 },
    { id: 76, nome: "Golem", tipo: "Pedra/Terra", nivel: 58, preco: 4000 },
    { id: 77, nome: "Ponyta", tipo: "Fogo", nivel: 30, preco: 2100 },
    { id: 78, nome: "Rapidash", tipo: "Fogo", nivel: 52, preco: 3700 },
    { id: 79, nome: "Slowpoke", tipo: "Água/Psíquico", nivel: 25, preco: 1700 },
    { id: 80, nome: "Slowbro", tipo: "Água/Psíquico", nivel: 48, preco: 3300 },
    { id: 81, nome: "Magnemite", tipo: "Elétrico/Metal", nivel: 24, preco: 1800 },
    { id: 82, nome: "Magneton", tipo: "Elétrico/Metal", nivel: 46, preco: 3200 },
    { id: 83, nome: "Farfetch'd", tipo: "Normal/Voador", nivel: 36, preco: 2600 },
    { id: 84, nome: "Doduo", tipo: "Normal/Voador", nivel: 21, preco: 1500 },
    { id: 85, nome: "Dodrio", tipo: "Normal/Voador", nivel: 43, preco: 3000 },
    { id: 88, nome: "Grimer", tipo: "Venenoso", nivel: 23, preco: 1600 },
    { id: 89, nome: "Muk", tipo: "Venenoso", nivel: 45, preco: 3100 },
    { id: 92, nome: "Gastly", tipo: "Fantasma/Venenoso", nivel: 20, preco: 1700 },
    { id: 93, nome: "Haunter", tipo: "Fantasma/Venenoso", nivel: 40, preco: 3100 },
    { id: 94, nome: "Gengar", tipo: "Fantasma/Venenoso", nivel: 58, preco: 4800 },
    { id: 95, nome: "Onix", tipo: "Pedra/Terra", nivel: 46, preco: 3300 },
    { id: 97, nome: "Hypno", tipo: "Psíquico", nivel: 44, preco: 3000 },
    { id: 130, nome: "Gyarados", tipo: "Água/Voador", nivel: 55, preco: 3900 },
    { id: 143, nome: "Snorlax", tipo: "Normal", nivel: 50, preco: 3500 },
    { id: 149, nome: "Dragonite", tipo: "Dragão/Voador", nivel: 70, preco: 6000 },
    { id: 150, nome: "Mewtwo", tipo: "Psíquico", nivel: 85, preco: 9500 }
];
