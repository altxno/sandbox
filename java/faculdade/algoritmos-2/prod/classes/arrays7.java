
//Calcular a média de idade, média de altura e média de peso de cada time
//de 11 jogadores, em um campeonato de 32 times. Calcular também a média
//de idade geral do campeonato.
//Desafio: considere 5 campeonatos

import java.util.Random;
import java.util.Scanner;

public class arrays7 {
	public static void main(String[] args) {

		Random rand = new Random();
		Scanner sc = new Scanner(System.in);

		//médias
		double medIdadeTime, medIdadeGeral, mediaPeso, mediaAltura;
		//quantidade das repetições
		int qtdJog, qtdTimes;
		//captura da quantidade
		System.out.println("Informe quantos jogadores");
		qtdJog = sc.nextInt();
		System.out.println("Informe quantos times");
		qtdTimes = sc.nextInt();

		double[][][] informacoes;


		informacoes = new double[qtdTimes][qtdJog][3];

		for (int time = 0; time < qtdTimes; time++) {
			medIdadeTime = 0;
			mediaPeso = 0;
			mediaAltura = 0;
			for (int jog = 0; jog < qtdJog; jog++) {
				System.out.printf
				("Idade do jogador %d do time %d%n", jog + 1, time + 1);
				informacoes[time][jog][0] = rand.nextInt(14, 36);
				medIdadeTime += informacoes[time][jog][0];

				System.out.printf
				("Peso do jogador %d do time %d%n", jog + 1, time + 1);
				informacoes[time][jog][1] = rand.nextInt(50, 80);
				mediaPeso += informacoes[time][jog][1];for (int joga = 0; jog < qtdJog; jog++) {

				System.out.printf
				("Idade do jogador %d do time %d%n", jog + 1, time + 1);
				informacoes[time][jog][0] = rand.nextInt(14, 36);
				medIdadeTime += informacoes[time][jog][0];

				System.out.printf
				("Peso do jogador %d do time %d%n", jog + 1, time + 1);
				informacoes[time][jog][1] = rand.nextInt(50, 80);
				mediaPeso += informacoes[time][jog][1];

				System.out.printf
				("Altura do jogador %d do time %d%n", jog + 1, time + 1);
				informacoes[time][jog][2] = rand.nextDouble(1.5, 1.9);
				mediaAltura += informacoes[time][jog][2];
				}
				System.out.printf
				("Altura do jogador %d do time %d%n", jog + 1, time + 1);
				informacoes[time][jog][2] = rand.nextDouble(1.5, 1.9);
				mediaAltura += informacoes[time][jog][2];
			}

		medIdadeTime /=  qtdJog;
		mediaPeso /= qtdJog;
		mediaAltura /= qtdJog;

		System.out.printf
		("Média de idade do time %d = %.0f%n",time+1, medIdadeTime);
		System.out.printf
		("Média de peso do time %d = %.2f%n",time+1, mediaPeso);
		System.out.printf
		("Média de altura do time %d = %.2f%n", time+1, mediaAltura);







		}
	}
}

// CRIAR A MÉDIA GERAL
// CRIAR UM MÉTODO PARA EXIBIR AS INFORMAÇÕES DE CADA JOGADOR,
// DA SEGUINTE FORMA: Jogador 1 - Idade [20] / Peso: [87,50] / Altura [1.75]
// AUMENTAR O ARRAY PARA CONSIDERAR CAMPEONATOS
