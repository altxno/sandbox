package exemplosPraProva;

public class Cods {

    static void main() {

        // INSERTION
        int[] numeros = {5, 2, 8, 1, 3};

        for(int i = 1; i < numeros.length; i++) {

            int atual = numeros[i];
            int j = i - 1;

            while (j >= 0 && numeros[j] > atual) {

                numeros[j + 1] = numeros[j];
                j--;
            }

            numeros[j + 1] = atual;
        }
// bubble

        for (int i = 0; i < numeros.length - 1; i++) {

            for (int j = 0; j < numeros.length - 1 - i; j++) {

                if (numeros[j] > numeros[j + 1]) {

                    int temp = numeros[j];
                    numeros[j] = numeros[j + 1];
                    numeros[j + 1] = temp;
                }
            }
        }

        // linear

        int procurado = 8;
        int resultado = -1;

        for (int i = 0; i < numeros.length; i++) {

            if (numeros[i] == procurado) {
                resultado = i;
                break;
            }
        }

        System.out.println(resultado);

// binary


            procurado = 15;

            int inicio = 0;
            int fim = numeros.length - 1;

            while (inicio <= fim) {

                int meio = (inicio + fim) / 2;

                if (numeros[meio] == procurado) {
                    System.out.println("Encontrado na posição: " + meio);
                    break;
                }

                if (numeros[meio] < procurado) {
                    inicio = meio + 1;
                } else {
                    fim = meio - 1;
                }
            }



    }



}
