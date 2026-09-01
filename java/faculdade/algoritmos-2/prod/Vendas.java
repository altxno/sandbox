package Pacote;

import javax.swing.*;

public class Vendas {

    public static void main(String[] args) {

        int vendedores = 4;
        int meses = 3;

        double[][] vendas = new double[vendedores][meses];

        String[] nomes = {
                "guilerme","bianca","bruno","giovanna"
        };

        String[] nomesMeses = {
                "janeiro","fevereiro","março"
        };

        for (int i = 0; i < vendedores; i++) {
            for (int j = 0; j < meses; j++) {
                String entrada = JOptionPane.showInputDialog("Vendedor" + nomes[i] +
                        "\nMes: " + nomesMeses[j] +
                        "\nDigite o valor vendido: ");
                vendas[i][j] = Double.parseDouble(entrada);
            }
        }

        String relatorio = "===== Relatorio de vendas =====\n\n";
        for (int i = 0; i < vendedores; i++) {
            relatorio += nomes[i] + " : \n";
            double totalVendedor = 0;

            for (int j = 0; j < meses; j++) {
                relatorio += nomesMeses[j] + " : R$" + vendas[i][j];
                totalVendedor += vendas[i][j];
            }
            relatorio +=  "Total: R$" + totalVendedor + "\n\n";
        }

        double maiorTotal = 0;
        int vendedorCampeao = 0;

        for (int i = 0; i < vendedores; i++) {
            double total = 0;
            for (int j = 0; j < meses; j++) {
                total += vendas[i][j];
            }
            if (total > maiorTotal){
                maiorTotal = total;
                vendedorCampeao = i;
            }
        }

        relatorio += "MAIOR VENDEDOR\n" + nomes[vendedorCampeao] +
                "\nTotal: R$" + maiorTotal;
        JOptionPane.showMessageDialog(null, relatorio);

    }
}
