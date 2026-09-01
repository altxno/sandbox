import java.util.Scanner;
Scanner in = new Scanner(System.in);

void main(){


    double[] valorPorDia = new double[7];
    double total = 0;
    int diaCaro = 0;
    double valorCaro = 0;
    double entrada = 0;

    // Registra os gastos
    for (int i = 0; i < valorPorDia.length; i++) {
        System.out.println("Digite quanto você gastou no dia " + (i+1));
        valorPorDia[i] = in.nextDouble();
        entrada = valorPorDia[i];

        // Registra o total
        total += valorPorDia[i];

        // Registra o maior gasto
        if (entrada > valorCaro) {
            diaCaro = (i+1);
            valorCaro = entrada;
        }
    }

    for (int i = 0; i < valorPorDia.length; i++) {
        System.out.println("Valor gasto no dia "+ (i+1) + ": R$"+valorPorDia[i]);
    }

    double media = total / valorPorDia.length;
    System.out.println("Você gastou na semana: R$" + total);
    System.out.printf("A média de gastos é: R$%.1f", media);
    System.out.println("O dia que você mais gastou foi: " + diaCaro + " | Você gastou: R$"+valorCaro);

}

void ex2(){

    double notas[] = new double[10];


}