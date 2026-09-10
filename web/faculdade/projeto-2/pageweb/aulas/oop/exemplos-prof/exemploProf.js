
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Definição da classe Carro
class Carro {
    modelo = "T";
    cor = "";
    ano = 1908;
    velocidade = 0;
    constructor(novaCor){
        this.cor = novaCor;
    }
    acelerar(){
        if(this.velocidade<80)
            this.velocidade += 10;
        else
            console.log("Carro na velocidade Máxima");
    }
    frear(){
        if(this.velocidade>0)
            this.velocidade -= 10;
        else
            console.log("Carro parado!");
    }
}

async function main() {
    const rl = readline.createInterface({ input, output });

    // Primeiro carro (valor padrão "Preta" se der Enter vazio)
    let corEscolhida = await rl.question('Digite a cor do primeiro carro [Preta]: ');
    corEscolhida = corEscolhida.trim() || 'Preta';
    const meuCarro1 = new Carro(corEscolhida);

    // Segundo carro (valor padrão "Azul" se der Enter vazio)
    corEscolhida = await rl.question('Digite a cor do segundo carro [Azul]: ');
    corEscolhida = corEscolhida.trim() || 'Azul';
    const meuCarro2 = new Carro(corEscolhida);

    rl.close();
    meuCarro1.acelerar();
    meuCarro2.frear();
    console.log('Carro 1:', meuCarro1);
    console.log('Carro 2:', meuCarro2);
}
main();