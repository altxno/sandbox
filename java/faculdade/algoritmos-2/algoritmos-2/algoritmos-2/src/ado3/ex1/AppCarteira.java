package ado3.ex1;

import java.util.Scanner;

public class AppCarteira {

    static Scanner sc = new Scanner(System.in);

    static void main() {

        boolean auth = true;
        while (auth){
            System.out.println("""
                    1. Criar carteira
                    2. Depositar
                    3. Sacar
                    4. Transferir
                    5. Consultar saldo
                    6. Extrato
                    ----------------------
                    0. SAIR
                    """);
        }

        int opcao = sc.nextInt();
        switch (opcao) {
            case 1:
            case 2: CarteiraDigital depositar();
            case 0: auth = false;
        }
    }

}
