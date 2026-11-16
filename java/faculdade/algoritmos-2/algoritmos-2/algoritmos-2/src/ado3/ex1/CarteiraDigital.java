package ado3.ex1;

public class CarteiraDigital {
    private String titular;
    private double saldo;
    private double limitePorOperacao;
    private Movimentacao[] extrato = new Movimentacao[10];
    private int quantidadeMovimentos;

    public CarteiraDigital(String titular, double limitePorOperacao) {
        if (limitePorOperacao <= 0) {
            throw new IllegalArgumentException("Limite deve ser maior que zero.");
        }
        this.titular = titular;
        this.limitePorOperacao = limitePorOperacao;
    }

    public boolean depositar(double valor) {
        if (valor <= 0 || valor > limitePorOperacao) return false;
        saldo += valor;
        registrar("DEPÓSITO", valor);
        return true;
    }

    public boolean sacar(double valor) {
        if (valor <= 0 || valor > limitePorOperacao || valor > saldo) return false;
        saldo -= valor;
        registrar("SAQUE", valor);
        return true;
    }

    public boolean transferir(CarteiraDigital destino, double valor) {
        if (destino == null || destino == this || valor <= 0 || valor > limitePorOperacao || valor > saldo) return false;
        saldo -= valor;
        destino.saldo += valor;
        registrar("TRANSFERÊNCIA ENVIADA PARA " + destino.titular, valor);
        destino.registrar("TRANSFERÊNCIA RECEBIDA DE " + titular, valor);
        return true;
    }

    public double consultarSaldo() {
        return saldo;
    }

    public String listarExtrato() {
        if (quantidadeMovimentos == 0) return "Nenhuma movimentação.";
        String texto = "";
        for (int i = 0; i < quantidadeMovimentos; i++) {
            texto += (i + 1) + ". " + extrato[i] + "\n";
        }
        return texto;
    }

    private void registrar(String tipo, double valor) {
        if (quantidadeMovimentos == 10) {
            for (int i = 0; i < 9; i++) {
                extrato[i] = extrato[i + 1];
            }
            quantidadeMovimentos = 9;
        }
        extrato[quantidadeMovimentos] = new Movimentacao(tipo, valor);
        quantidadeMovimentos++;
    }
}
