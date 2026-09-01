import java.util.Random;
import java.util.Scanner;

public class provateste2 {

	void main(){

		int idade, mediaIdade, qtd24, qtd2Grad, qtdEmpreg, qtdBolsa,
				segGrad, empreg, bolsa, qtdMat, qtdVes, qtdNot, periodo, qtdEst;
		double percEmpreg, percBolsa, desconto, mediaDesconto;

		Scanner sc = new Scanner(System.in);
		Random rand = new Random();

		do {
			System.out.println("Informe a quantidade de estudantes:");
			qtdEst = sc.nextInt();
		}while(qtdEst<=0);

		for (int i=0 ; i < qtdEst ; i++){
			do {
				System.out.println("Informe a idade do aluno"+(i+1));
				idade = rand.nextInt(10,80);
			}while(idade<18||idade>70);

			mediaIdade += idade;

		}



	}

}