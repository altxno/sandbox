package ado3.ex1;

import java.util.Scanner;

public class AppCarteira {
    private static double limite = 1000.00;
    private static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.print("Nome do titular da carteira 1: ");
        CarteiraDigital c1 = new CarteiraDigital(sc.nextLine(), limite);
        System.out.print("Nome do titular da carteira 2: ");
        CarteiraDigital c2 = new CarteiraDigital(sc.nextLine(), limite);

        int opcao;
        do {
            exibirMenu();
            opcao = sc.nextInt();

            switch (opcao) {
                case 1: depositar(c1, c2); break;
                case 2: sacar(c1, c2); break;
                case 3: transferir(c1, c2); break;
                case 4: consultarSaldo(c1, c2); break;
                case 5: verExtrato(c1, c2); break;
                case 0: break;
                default: System.out.println("Opção inválida.");
            }
        } while (opcao != 0);

        System.out.println("Programa encerrado.");
    }

    private static void exibirMenu() {
        System.out.println("\n1. Depositar");
        System.out.println("2. Sacar");
        System.out.println("3. Transferir");
        System.out.println("4. Consultar saldo");
        System.out.println("5. Ver extrato");
        System.out.println("0. Sair");
        System.out.print("Escolha uma opção: ");
    }

    private static CarteiraDigital escolherCarteira(CarteiraDigital c1, CarteiraDigital c2) {
        System.out.print("Qual carteira está agindo (1 ou 2)? ");
        int escolha = sc.nextInt();
        switch (escolha) {
            case 1: return c1;
            case 2: return c2;
            default:
                System.out.println("Carteira inválida.");
                return null;
        }
    }

    private static void depositar(CarteiraDigital c1, CarteiraDigital c2) {
        CarteiraDigital c = escolherCarteira(c1, c2);
        if (c == null) return;
        System.out.print("Valor: R$ ");
        double valor = sc.nextDouble();
        resultado(c.depositar(valor), valor);
    }

    private static void sacar(CarteiraDigital c1, CarteiraDigital c2) {
        CarteiraDigital c = escolherCarteira(c1, c2);
        if (c == null) return;
        System.out.print("Valor: R$ ");
        double valor = sc.nextDouble();
        resultado(c.sacar(valor), valor);
    }

    private static void transferir(CarteiraDigital c1, CarteiraDigital c2) {
        CarteiraDigital origem = escolherCarteira(c1, c2);
        if (origem == null) return;
        CarteiraDigital destino = (origem == c1) ? c2 : c1;
        System.out.print("Valor: R$ ");
        double valor = sc.nextDouble();
        resultado(origem.transferir(destino, valor), valor);
    }

    private static void consultarSaldo(CarteiraDigital c1, CarteiraDigital c2) {
        CarteiraDigital c = escolherCarteira(c1, c2);
        if (c != null) System.out.printf("Saldo: R$ %.2f%n", c.consultarSaldo());
    }

    private static void verExtrato(CarteiraDigital c1, CarteiraDigital c2) {
        CarteiraDigital c = escolherCarteira(c1, c2);
        if (c != null) System.out.println("Extrato:\n" + c.listarExtrato());
    }

    private static void resultado(boolean sucesso, double valor) {
        if (sucesso) {
            System.out.println("Operação realizada com sucesso.");
        } else if (valor <= 0) {
            System.out.println("Operação recusada: o valor precisa ser maior que zero.");
        } else if (valor > limite) {
            System.out.println("Operação recusada: o limite por operação é R$ 1000,00.");
        } else {
            System.out.println("Operação recusada: saldo insuficiente.");
        }
    }
}
