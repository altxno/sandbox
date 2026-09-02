/*
Autor @ Altino Ávila | 15/05/2026 | Java 25
-------------------------------------------
As soluções dos exercícios a seguir são
remakes baseados no meu conhecimento
do final do primeiro semestre.
*/
// O novo Java 25 excluí a necessidade da famigerada declaração de classe/metodo main "complicada"
// Essa lista NÃO contem validação de entrada

import java.util.Scanner;
Scanner input = new Scanner(System.in);

// Este metodo contém apenas o menu inicial
void main() {
    while (true) {
        System.out.println("===== Lista de exercícios 1 =====");
        String[] opcoes = {
                "ENCERRAR O PROGRAMA",
                "Verificar se é par/ímpar, múltiplo/divisível",
                "Verificar se é positivo/negativo/zero",
                "Verificar qual maior entre 2 números",
                "Verificar qual maior entre 3 números",
                "Verificar se uma nota foi aprovada/reprovada",
                "Verificar se está na idade de se aposentar",
                "Verificar se um número é múltiplo de 5",
                "Verificar se um número é divisível por 3 e 4",
                "Verificar se está na idade para votar",
                "Verificar se os lados formam um triângulo válido",
                "Verificar se o triângulo anterior é equilátero, isóceles ou escaleno",
                "Aplicar porcentagens de desconto",
                "Ordenar uma lista númerica de forma crescente",
                "Converter nota (0-10) para conceito (A-E)",
                "Calcular dois números com as operações básicas",
                "Verificar se o terceiro número é igual aos anteriores",
                "Verificar se dois números são par/ímpar",
                "Verificar se um ano é bissexto",
                "Classificar o IMC",
                "Classificar um número em positivo/negativo, par/ímpar, inteiro/decimal",
                "Menu de 4 itens",
                "Calcular dois números com as operações básicas 2.0",
                "Menu de 4 transportes + Cálculo de velocidade",
                "Converter moedas com base na cotação atual (cotação imaginária, sem API)",
                "Menu de calcular a área de figuras geométricas"
        };
        for (int i = 0; i < opcoes.length; i++) {
            System.out.printf("%-2s -> %s%n", i, opcoes[i]);
        }
        System.out.println("\nESCOLHA A OPÇÃO:");
        int opcao;
        switch (opcao = input.nextInt()) {
            case 0  -> {return;}
            case 1  -> ex1();
            case 2  -> ex2();
            case 3  -> ex3();
            case 4  -> ex4();
            case 5  -> ex5();
            case 6  -> ex6();
            case 7  -> ex7();
            case 8  -> ex8();
            case 9  -> ex9();
            case 10 -> ex10();
            case 11 -> ex11();
            case 12 -> ex12();
            case 13 -> ex13();
            case 14 -> ex14();
            case 15 -> ex15();
            case 16 -> ex16();
            case 17 -> ex17();
            case 18 -> ex18();
            case 19 -> ex19();
            case 20 -> ex20();
            case 21 -> ex21();
            case 22 -> ex22();
            case 23 -> ex23();
            case 24 -> ex24();
            case 25 -> ex25();
            default -> System.out.println("Opção inválida");
        }
    }
}

void ex1(){
    boolean par = false;
    boolean multiplo = false;  // De 3
    boolean divisivel = false; // Por 5
    System.out.println("Informe um número inteiro:");
    int x = input.nextInt();
    input.nextLine();

    if (x % 2 == 0){
        par = true;
    } else if (x % 3 == 0) {
        multiplo = true;
    } else if (x % 5 == 0) {
        divisivel = true;
    }
    System.out.println(par ? "É par" : "É ímpar");
    System.out.println(multiplo ? "É múltiplo de 3" : "Não é múltiplo de 3");
    System.out.println(divisivel ? "É divisível por 5":"Não é divisível por 5");

    System.out.println("Pressione ENTER para continuar");
    input.nextLine();
}
void ex2(){
    System.out.println("Informe um número inteiro:");
    int x = input.nextInt();
    input.nextLine();

    if (x == 0){
        System.out.println("O número é igual a zero");
    } else if (x > 0) {
        System.out.println("O número é positivo");
    } else {
        System.out.println("O número é negativo");
    }

    System.out.println("Pressione ENTER para continuar");
    input.nextLine();
}
void ex3(){
    int[] x = new int[2];
    for (int i = 0; i < x.length; i++) {
        System.out.println("Informe o " + (i+1) +"º número");
        x[i] = input.nextInt();
    }
    if (x[0] == x[1] ){
        System.out.println("Os números são iguais");
    } else if (x[0] > x[1]) {
        System.out.printf("O número %s é o maior%n", x[0]);
    } else {
        System.out.printf("O número %s é o maior%n", x[1]);
    }

    System.out.println("Pressione ENTER para continuar");
    input.nextLine();
    input.nextLine();
}
void ex4(){
    int[] x = new int[3];
    for (int i = 0; i < x.length; i++) {
        System.out.println("Informe o " + (i+1) +"º número");
        x[i] = input.nextInt();
    }

    for (int i = 0; i < x.length; i++) {
        if (x[i+1] > x[i]){
            x[i+1] = x[i];
        }
    }

    System.out.println("Pressione ENTER para continuar");
    input.nextLine();
    input.nextLine();
}
void ex5(){}
void ex6(){}
void ex7(){}
void ex8(){}
void ex9(){}
void ex10(){}
void ex11(){}
void ex12(){}
void ex13(){}
void ex14(){}
void ex15(){}
void ex16(){}
void ex17(){}
void ex18(){}
void ex19(){}
void ex20(){}
void ex21(){}
void ex22(){}
void ex23(){}
void ex24(){}
void ex25(){}

