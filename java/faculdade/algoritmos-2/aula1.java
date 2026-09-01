package PacoteJava;

import javax.swing.*;

public class Loja1 {
    public static void main (String[] args){
        int quantidadeProdutos = 5;
        String[] produtos = new String[quantidadeProdutos];
        int[] quantidade = new int[quantidadeProdutos];
        double[] preco = new double[quantidadeProdutos];

        //Percorre todos os produtos
        for (int i=0;i<quantidadeProdutos;i++){
            produtos[i] = JOptionPane.showInputDialog(null,"Digite o nome do produto "+(i+1),
                    "Produtos",JOptionPane.QUESTION_MESSAGE);
            String entradaQuantidade = JOptionPane.showInputDialog("Digite a quantidade de "+produtos[i]+ ":");
            quantidade[i] = Integer.parseInt(entradaQuantidade);
            String entradaPreco = JOptionPane.showInputDialog("Digite o preço de/o "+produtos[i]+" : ");
            preco[i] = Double.parseDouble(entradaPreco);
        }
        double valortotalEstoque = 0;
        int indiceMaisCaro = 0;

        for (int i=0;i<quantidadeProdutos;i++){
            double valorProduto = quantidade[i] * preco[i];
            valortotalEstoque += valorProduto;
            if (preco[i] > preco[indiceMaisCaro]){
                indiceMaisCaro = i;
            }
        }
        String relatorio = "===== ESTOQUE =====\n\n";

        for (int i=0;i<quantidadeProdutos;i++){
            double total = quantidade[i] * preco[i];
            relatorio +=
                    "Produto: "+produtos[i]+
                    "\nQuantidade: "+quantidade[i]+
                    "\nPreço: "+preco[i]+
                    "\nValor em estoque: R$ "+total+
                    "\n-------------------------------\n";
        }
        relatorio +=
                "\nValor total do estoque: R$ "+valortotalEstoque;
        relatorio +=
                "\nProduto mais caro: "+produtos[indiceMaisCaro];

        JOptionPane.showMessageDialog(null,relatorio);
    }
}



package PacoteJava;

import javax.swing.*;

public class Vendas {
    public static void main(String[] args){
        int vendedores = 4;
        int meses = 3;


        double[][] vendas = new double[vendedores][meses];

        String[] nomes = {
                "Carlos","Ana","Marcos","Juliana"
        };
        String[] nomesMeses = {
                "Janeiro","Fevereiro","Março"
        };

        for (int i=0;i<vendedores;i++){
            for (int j=0;j<meses;j++){
                String entrada = JOptionPane.showInputDialog("Vendedor: "+nomes[i]+
                                                             "\nMês: "+nomesMeses[j]+
                                                             "\nDigite o valor vendido: ");
                vendas[i][j] = Double.parseDouble(entrada);
            }

        }
        String relatorio = "===== RELATÒRIO DE VENDAS =====\n\n";

        for(int i=0;i<vendedores;i++){
            relatorio += nomes[i]+" : \n";
            double totalVendador = 0;
            for (int j=0;j<meses;j++){
                relatorio += nomesMeses[j]+" : R$ "+vendas[i][j];
                totalVendador += vendas[i][j];
            }
            relatorio += "Total: R$ "+ totalVendador+"\n\n";
        }
        double maiorTotal = 0;
        int vendedorCampeao = 0;

        for(int i=0;i<vendedores;i++){
            double total = 0;
            for (int j=0;j<meses;j++){
                total += vendas[i][j];
            }
            if(total > maiorTotal){
                maiorTotal = total;
                vendedorCampeao = i;
            }
        }
        relatorio +=
                "MAIOR VENDEDOR\n"+
                        nomes[vendedorCampeao]+
                        "\nTotal: R$ "+maiorTotal;
        JOptionPane.showMessageDialog(null,relatorio);
    }
}
