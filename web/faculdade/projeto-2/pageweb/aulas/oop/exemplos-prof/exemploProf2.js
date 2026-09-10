class Carro {
    marca = "Ford";
    modelo = "T";
    cor = "";
    ano = 1908;
    velocidade = 0;

    constructor(novaCor) {
        this.cor = novaCor;
    }

    acelerar() {
        this.velocidade += 10;
    }

    acelerar(...args) {
        if (args.length === 0) {
            // Sem argumentos
            this.velocidade += 10;
        } else if (args.length === 1
            && typeof args[0] === "number") {
            // Um argumento
            this.velocidade += args[0];
        } else {
            throw new Error("Número inválido.");
        }
    }

    frear() {
        this.velocidade -= 10;
    }
}

const meuCarro = new Carro("Preta");
meuCarro.acelerar(20);
console.log("Cor: " + meuCarro.cor);
console.log("Velocidade: " + meuCarro.velocidade);