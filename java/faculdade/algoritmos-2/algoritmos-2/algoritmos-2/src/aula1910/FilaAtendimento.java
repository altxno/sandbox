package aula1910;

public class FilaAtendimento {

    private Cliente[] elementos;

    private int quantidade;

    public FilaAtendimento(int capacidade){

        if (capacidade<0){
            throw new IllegalArgumentException("Capacidade deve ser maior que zero");
        }

        this.elementos = new Cliente[capacidade];

        this.quantidade=0;

    }

    public boolean estaVazia(){
        return quantidade == 0;
    }

    public boolean estaCheia(){
        return quantidade == elementos.length;
    }

    public int tamanho(){
        return quantidade;
    }

    public Cliente primeiro (){
        if(estaVazia()){
            return null;
        }
        return elementos[0];
    }

    public boolean enfileirar(Cliente cliente){
        if (estaCheia()){
            return false;
        }
        elementos[quantidade] = cliente;
        quantidade++;
        return true;
    }

    public Cliente desenfileirar(){
        if (estaVazia()){
            return null;
        }

        Cliente removido = elementos[0];

        for (int i = 0; i < quantidade - 1; i++) {
            elementos[i] = elementos[i+1];
        }

        elementos[quantidade-1] = null;
        quantidade--;
        return removido;
    }

    public String listar(){
        if (estaVazia()){
            return "A fila esta vazia";
        }

        StringBuilder texto = new StringBuilder();

        for (int i = 0; i < quantidade - 1; i++) {
            texto.append((i+1)+"o. - "+elementos[i]+"\n");
        }

        return texto.toString();
    }


}
