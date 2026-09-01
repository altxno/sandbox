import java.util.Random;
import java.util.Scanner;
public class arrays2
{
public static void main(String[] args)

{

Random rand = new Random();
Scanner sc = new Scanner(System.in);

int media, idades[], qtd;

System.out.println("Informe a quantidade de pessoas que vão responder: ");
qtd = sc.nextInt();

idades = new int[qtd];

for(int i=0;i<idades.length;i++)
{
//pq esse i+1 ai embaixo?
System.out.println("Informe a idade da pessoa "+ (i+1));
idades[i] = rand.nextInt(12,60);
//System.out.println("A idade randômica é: "+idades[i]);
}

media = 0;
for(int idade:idades)
{
System.out.printf("idade: %d%n", idade);
media += idade;
}
media /= idades.length;
System.out.printf("Média de idade: %d%n", media);


}

}
