package aula2809;

import javax.swing.*;

public class Rec {
    public static long fatorial(int n){
        if(n == 0){
            return 1;
        }
        // n! = n* (n-1)
        return n* fatorial(n-1);        //n = 5 -- 5*4*3*2*1
    }

    public static int buscaBinariaRecursiva (int[] vetor, int codProcurado, int inicio, int fim){
        //fracassso
        if(inicio > fim){
            return -1;
        }
        int meio = inicio + (fim-inicio)/2;
        //caso base 2(sucesso)
        if(vetor[meio] == codProcurado){
            return meio;
        }
        //caso recursivo
        if(codProcurado > vetor[meio]){
            return buscaBinariaRecursiva(vetor,codProcurado,meio+1,fim);
        }else{
            //caso recursivo 2
            return buscaBinariaRecursiva(vetor,codProcurado,inicio,meio-1);
        }

    }
    public static void main(String[] args) {
        System.out.print(fatorial(5));
        int[] vetor = {1010,1025,1040,1077,1103,1150,1212,1305};
        String[] produtos = {"caderno", "caneta", "mochila", "calculadora", "estojo"};
        boolean continuar = true;
        while(continuar){
            String opcao = JOptionPane.showInputDialog("Menu\n"+
                    "1 - Formas de organizar uma fila \n"+
                    "2 - Consulta produto pelo codigo \n"+
                    "0 - Sair\n\n"+
                    "Escolha uma opção");
            if(opcao == null){
                break;
            }
            switch (opcao){
                case "1":
                    String texto1 = JOptionPane.showInputDialog("Quantas pessoas estão na fila?(Max 20)");
                    if(texto1 == null){
                        break;
                    }
                    try{
                        int pessoas = Integer.parseInt(texto1);
                        if (pessoas< 0 || pessoas>20){
                            JOptionPane.showMessageDialog(null,"Digite um valor entre 0 e 20");
                        }else{
                            long formas = fatorial(pessoas);
                            JOptionPane.showMessageDialog(null,pessoas+" pessoas podem se organizar em uma fila de\n"+
                                    formas+ " formas diferentes("+pessoas+").","Resultado fatorial",JOptionPane.INFORMATION_MESSAGE);
                        }
                    }catch (NumberFormatException e){
                        JOptionPane.showMessageDialog(null, "Valor Inválido");
                    }
                    break;

                case "2":
                    String texto2 = JOptionPane.showInputDialog("Digite o código do produto:");
                    if(texto2 == null){
                        break;
                    }
                    try {
                        int cod = Integer.parseInt(texto2);
                        int posicao = buscaBinariaRecursiva(vetor, cod, 0, vetor.length - 1);
                        if (posicao != -1) {
                            JOptionPane.showMessageDialog(null, "Cógido " + cod +
                                    " encontrado!\nProduto: " + produtos[posicao], "Produto Encontrado", JOptionPane.INFORMATION_MESSAGE);
                        } else {
                            JOptionPane.showMessageDialog(null, "Código: " + cod +
                                    " não existe no catalogo");
                        }
                    } catch (NumberFormatException e){
                        JOptionPane.showMessageDialog(null, "Código inválido");
                    }
                    break;

                case "3": continuar = false;
                break;

                default:
                    JOptionPane.showMessageDialog(null, "Opcao invalida");
            }
        }
    }
}