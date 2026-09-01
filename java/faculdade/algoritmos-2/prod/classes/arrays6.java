import java.util.Scanner;
public class arrays6{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int[][] idades = new int[5][10];

        for(int i=0 ; i<idades.length ; i++){
            for(int j=0 ; j<idades[i].length ; j++){
                System.out.printf("Idade do aluno %d da fileira %d%n", j, i);
                idades[i][j] = (int)(Math.random()*101);
            }
        }

        for(int i = 0 ; i < idades.length; i++){
            for(int j = 0 ; j < idades[i].length; j++){
                System.out.printf("[%d]", idades[i][j]);
        }
        System.out.println();
    }
    }
}
