package exemplosPraProva;

public class Ado1 {

    static void main() {

        double[] numeros = {17.5, 43.2, 23.2, 54.3, 32.4, 54.3, 54.4, 54.7};

        for (int i = 0; i < numeros.length - 1; i++) {

            for (int j = 0; j < numeros.length - 1 - i; j++) {

                if (numeros[j] > numeros[j + 1]) {

                    double temp = numeros[j];
                    numeros[j] = numeros[j + 1];
                    numeros[j + 1] = temp;
                }
                for (int k = 0; k < numeros.length; k++) {
                    System.out.print(numeros[k] + " ");
                    if (k == (numeros.length -1)) {

                        System.out.println();
                    }
                }

            }

        }

    }

}
