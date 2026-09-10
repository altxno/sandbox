// Crie dois objetos da classe Carro
// 1. Cada objeto deverá ter uma cor diferente e modelo diferente.
//     Peça essas informações ao usuário.
// 2. Exiba no console:
//     • A cor e o modelo de cada objeto;
// 4. Melhore os métodos acelerar() e frear()
// Implementes limites para aceleração e frenagem.

class Carro {
    marca = undefined;
    modelo = undefined;
    cor = undefined;
    ano = undefined;
    velocidade = undefined;

    constructor(marca, modelo, cor, ano, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.velocidade = velocidade;
    }
}

const carro = new Carro("Nascar", "McQueen", "Vermelho", "2002", 240);

console.log(carro);

document.getElementById("cor").textContent = carro.cor;
document.getElementById("modelo").textContent = carro.modelo;