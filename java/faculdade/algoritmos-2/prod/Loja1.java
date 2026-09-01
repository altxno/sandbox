package Pacote;

import javax.swing.*;
import java.util.Scanner;

public class Loja1 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int quantidadeProdutos = 5;
        String[] produtos = new String[quantidadeProdutos];
        int[] quantidade = new int[quantidadeProdutos];
        double[] preco = new double[quantidadeProdutos];

        //Percorrer todos os produtos
        //JOptionPane só aceita String

        for (int i = 0; i < quantidadeProdutos; i++) {

            produtos[i] = JOptionPane.showInputDialog(null, "Insira o nome do produto " + (i+1), "Produtos", JOptionPane.QUESTION_MESSAGE);
            String entradaQuantidade = JOptionPane.showInputDialog("Digite a quantidade de produtos " + produtos[i] + ":");
            quantidade[i] = Integer.parseInt(entradaQuantidade);
            String entradaPreco = JOptionPane.showInputDialog("Digite po preco do produto " + produtos[i] + ":");
            preco[i] = Double.parseDouble(entradaPreco);

        }

        double valorTotalEstoque = 0;
        int indiceMaisCaro = 0;

        for (int i = 0; i < quantidadeProdutos; i++) {

            double valorProduto = quantidade[i] * preco[i];
            valorTotalEstoque += valorProduto;

            if (preco[i] > preco[indiceMaisCaro]){
                indiceMaisCaro = i;
            }

        }
        String relatorio = "===== ESTOQUE =====\n\n";

        for (int i = 0; i < quantidadeProdutos; i++) {
            double total = quantidade[i] * preco [i];
            relatorio += "Produto: " + produtos[i] +
                         "\nQuantidade: " + quantidade[i] +
                         "\nPreco: " + preco[i] +
                         "\nValor em Estoque: R$" + total +
                         "---------------------------------";
        }
        relatorio += "\nValor total do estoque: R$" + valorTotalEstoque;
        relatorio += "\nProduto mais caro: " + produtos[indiceMaisCaro];
        JOptionPane.showMessageDialog(null, relatorio);

    }

}
