import java.util.Random;

public class arrays4
{

    //CRIAR UM ARRAY DE INT COM 50 POSIÇÕES
    // PREENCHE-LO AUTO COM VALORES DE 0 A 100
    // BUSCAR A ULTIMA OCORRENCIA DE UM NUMERO
    // SUBSTITUIR ESSE NUMERO POR 999
    public static void main(String[] args)
    {
        int[] vetor = new int[50];
        int n = 27;

        //gerador p/ preencher array
        for(int i = 0; i < vetor.length ; i++)
        {
            vetor[i] = (int)(Math.random()*101);
        }
        //laço pra percorrer todas as posições
        for(int i = 0 ; i < vetor.length ; i++)
        {
            System.out.print(vetor[i]+"  ");
        }
        //dar match e substituir
        for(int i = vetor.length - 1 ; i <= 0 ; i--)
        {
            if(vetor[i] == n)
            {
                vetor[i] = 999;
            }
        }
        //printar array novo
        for(int i = 0 ; i < vetor.length ; i++)
        {
            System.out.print(vetor[i]+"  ");
        }


    }

}
