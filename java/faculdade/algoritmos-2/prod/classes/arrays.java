import java.util.Scanner;
public class arrays

{

static Scanner sc = new Scanner(System.in);

public static void main(String[] args)

{

double[] notas = new double[5];
double media = 0;

for(int i=0;i < notas.length;i++)
{
System.out.println("Informe a nota do aluno "+(i + 1));
notas[i] = sc.nextDouble();
}

for(int i=0;i < notas.length;i++){media += notas[i];}
media /= 5;

System.out.printf("A média da nota dos seus alunos é %5.2f%n", media);
System.out.println(notas.length);

}

}
