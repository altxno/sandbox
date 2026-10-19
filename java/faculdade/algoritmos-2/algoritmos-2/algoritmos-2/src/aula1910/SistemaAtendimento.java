package aula1910;

import javax.swing.*;

public class SistemaAtendimento {

    private static int lerCapacidade(){

        while (true){
            String texto = JOptionPane.showInputDialog("Informe a capacidade máxima da fila de atendimento");
            if (texto == null){
                return -1;
            }
            try {
                int valor = Integer.parseInt(texto.trim());
                if (valor>0){
                    return valor;
                }
                JOptionPane.showMessageDialog(null, "Digite um numero maior que 0");
            } catch (NumberFormatException e){
                JOptionPane.showMessageDialog(null, "Valor invalido, digite apenas numeros inteiros");
            }
        }

    }

    static void main() {
        int capacidade = lerCapacidade();
        if (capacidade == -1){
            System.exit(0);
        }
        FilaAtendimento fila = new FilaAtendimento(capacidade);
        int proximaSenha = 1;
        boolean continuar = true;

        while(continuar){
            String opcao = JOptionPane.showInputDialog(
                    """
                            ==== FILA DE ATENDIMENTO ====
                            1. Retirar senha (enfileirar)
                            2. Chamar proximo cliente (desenfileirar)
                            3. Ver quem é o proximo cliente (enfileirar)
                            4. Listar a fila de clientes
                            0. Sair
                            
                            Escolha sua opcao:\s"""
            );
            if (opcao == null){
                break;
            }

            switch (opcao.trim()){

                case "1":
                    if (fila.estaCheia()){
                        JOptionPane.showMessageDialog(null, "A fila esta cheia");
                    } else {
                        String nome = JOptionPane.showInputDialog("Digite nome do cliente: ");
                        if (nome == null || nome.trim().isEmpty()){
                            JOptionPane.showMessageDialog(null, "Nome invalido! Nenhuma senha gerada");
                        } else {
                            Cliente novo = new Cliente(nome.trim(), proximaSenha);
                            fila.enfileirar(novo);
                            proximaSenha++;
                            JOptionPane.showMessageDialog(null, "Senha gerada "+novo+"\nClientes na fila: "+
                                    fila.tamanho());
                        }

                    }

                    break;


                case "2":
                    Cliente atendido = fila.desenfileirar();
                    if (atendido == null){
                        JOptionPane.showMessageDialog(null, "Nao ha clientes aguardando");
                    } else {
                        JOptionPane.showMessageDialog(null, "Chamando: "+
                                atendido+"\nClientes restantes: "+fila.tamanho());
                    }
                    break;


                case "3":
                    Cliente proximo = fila.primeiro();
                    if (proximo == null){
                        JOptionPane.showMessageDialog(null, "A fila esta vazia");
                    } else {
                        JOptionPane.showMessageDialog(null, "Proximo a ser atendido: "+
                                proximo);
                    }
                    break;

                case "4":
                    JOptionPane.showMessageDialog(null,
                            fila.listar()+"\nTotal"+fila.tamanho()+" de "+capacidade,
                            "Situacao da fila", JOptionPane.INFORMATION_MESSAGE);
                    break;

                case "0":
                    continuar = false;
                    break;

                default: JOptionPane.showMessageDialog(null, "Opcao invalida");
            }
        }
        System.exit(1);
    }

}
