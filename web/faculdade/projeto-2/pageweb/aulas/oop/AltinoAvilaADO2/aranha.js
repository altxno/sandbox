"use strict";
class Aranha {
    nome;
    venenosa;
    quantidadePernas;
    constructor(nome, venenosa = true, qtdPernas = 8) {
        this.nome = nome;
        this.venenosa = venenosa;
        this.quantidadePernas = qtdPernas;
    }
    tecerTeia() {
        console.log(this.nome + " teceu teia");
    }
    escalar(superficie) {
        console.log(this.nome + " está escalando a " + superficie);
    }
}
const aranha1 = new Aranha("dona aranha", true, 8);
const aranha2 = new Aranha("altinanha", false, 8);
console.log("aranhas no terrario do ALTINO ÁVILA GOMES");
console.log("aranha 1:", aranha1.nome);
console.log("aranha 2:", aranha2.nome);
aranha1.tecerTeia();
aranha2.escalar("parede");
