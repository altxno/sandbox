void main() {


    class InsertionSort {

        public static void ordenarInsercao(int[] array){
            int n = array.length;

            //Consideramos que o elemento do índice 0 já forma, sozinho.
            //uma "parte ordenada"
            for (int i=1;i<n;i++){
                int atual = array[i];
                int j = i-1;
                while (j>=0 && array[j]> atual){
                    array[j+1] = array[j];
                    j--;
                }
                array[j+1] = atual;
            }
        }

        public static void imprimirArray(int[] array){
            for (int valor : array) {
                System.out.println(valor + " ");
            }
            System.out.println();
        }

        public static void main(String[] args) {
            int[] numeros = {12,11,13,5,6};
            System.out.println("antes de ordenar por inserção: ");
            imprimirArray(numeros);
            ordenarInsercao(numeros);
            System.out.println("Depois de ordenar o array utilizando o método de inserção:");
            imprimirArray(numeros);
        }
    }



}