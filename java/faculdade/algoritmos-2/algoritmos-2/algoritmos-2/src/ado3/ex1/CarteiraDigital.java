package ado3.ex1;

public class CarteiraDigital {

    private String titular;
    private double saldo;
    private double limitePorOperacao;
    private double[] extrato = new double[10];
    private int quantidadeMovimentos;

    public CarteiraDigital(String $titular, double $limitePorOperacao){
        this.titular = $titular;
        this.limitePorOperacao = $limitePorOperacao;
        this.saldo = 0;
        if (this.limitePorOperacao <= 0){
            throw new IllegalArgumentException("Limite deve ser > 0!");
        }
    }

    public double depositar(double valor){
        if (valor > 0 && valor < limitePorOperacao){
            this.saldo += valor;
            return this.saldo;
        } else {
            return this.saldo;
        }
    }

    public double sacar(double valor){
        if (valor > 0 && valor < limitePorOperacao && valor <= this.saldo){
            this.saldo -= valor;
            return this.saldo;
        } else {
            return this.saldo;
        }
    }

    public void transferir(String destino, double valor){
        // TODO tem que fazer aqui
    }

    public double consultarSaldo(){
        return this.saldo;
    }

    public void listarExtrato(){
        for (int i = 0; i < extrato.length; i++) {
            System.out.println("1 - "+extrato[i]+" ");
        }
    }


}
