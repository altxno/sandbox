class Aranha {
    nome?: string;
    cor: string = "";
    vitimas?: number;
    teia?: number;

    constructor(nomeAdd: string, corAdd: string, vitimasAdd: number) {
        this.nome = nomeAdd;
        this.cor = corAdd;
        this.vitimas = vitimasAdd;
    }

    addVitimas(vitimas?: undefined) {
        if (vitimas == undefined) {
            this.vitimas = 1;
        } else {
            this.vitimas = vitimas;
        }
    }

    soltarTeia(teia?: undefined) {
        if (teia === undefined) {
            this.teia = 10;
        } else {
            this.teia = teia;
        }
    }


    addNome(nome?: undefined) {
        if (nome === undefined) {
            this.nome = "Aranha sem nome";
        } else {
            this.nome = nome;
        }
    }

}