void main() {


    class BubbleSort {

        //Métodpo que ordena um array de inteiros em ordem crescente
        public static void ordenarBolha(int[] array){
            //Criar a variável "n" para guardar o tamanho do array
            int n = array.length;
            //Criar loop externo: controla quantas "passagens" completas faremos com o array
            for (int passagem=0;passagem<n-1;passagem++){
                boolean houveTroca = false;
                //Loop interno: percorre o array comparando os pares de elementos vizinhos
                for (int j=0;j<n-1-passagem;j++){
                    if (array[j] > array[j+1]){
                        int temp = array[j];
                        //Colocamos o valor do vizinho na posição atual
                        array[j] = array[j+1];
                        array[j+1] = temp;
                        houveTroca = true;
                    }
                }
                //Se percorremos o array inteiro sem nenhuma troca
                //significa que ele já está ordenado - podemos parar mais cedo
                if(!houveTroca){
                    break;
                }
            }
        }

        public static void imprimirArray(int[] array){
            for (int valor : array) {
                System.out.println(valor + " ");
            }
            System.out.println();
        }

        public static void main(String[] args) {
            int[] numeros = {64,34,25,12,22,11,90};

            System.out.println("antes de ordenar por bolha: ");
            imprimirArray(numeros);
            ordenarBolha(numeros);
            System.out.println("Depois de ordenar o array utilizando o método da bolha:");
            imprimirArray(numeros);
        }
    }






}