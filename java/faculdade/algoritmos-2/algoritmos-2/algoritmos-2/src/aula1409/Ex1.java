package aula1409;

//  CORRIGIDO
public class Ex1 {

    static void ordenarBolha(int[] senhas){

        int n = senhas.length;
        for (int i = 0; i < n-1; i++) {
            boolean houveTroca = false;

            for (int j = 0; j < n-1; j++) {
                if (senhas[j] > senhas[j+1]){
                    int temp = senhas[j];
                    senhas[j] = senhas[j+1];
                    senhas[j+1] = temp;
                    houveTroca = true;
                }
            }

            if (!houveTroca){
                break;
            }

        }

    }

    void main(){

        int[] n = {23, 543, 32, 2, 3, 4, 7, 9, 21, 1, 2};

        System.out.println("nao ordenado");
        for (int i = 0; i < n.length; i++) {
            System.out.print(n[i]+" | ");
        }


        ordenarBolha(n);

        System.out.println();
        System.out.println("ordenado");
        for (int i = 0; i < n.length; i++) {
            System.out.print(n[i]+" | ");
        }

    }




}
