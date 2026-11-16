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

//Exercício 1 — Carteira Digital
//Situação
//Pagamentos instantâneos pelo celular fazem parte do dia a dia: transferir dinheiro para um amigo, dividir a conta do restaurante, pagar um lanche. Uma startup de pagamentos precisa construir o núcleo de uma carteira digital. Esse núcleo precisa garantir que o saldo nunca fique negativo e que todo movimento fique registrado em um extrato, sem que nenhuma outra parte do sistema consiga alterar o saldo "por fora".
//Objetivo de aprendizagem
//Aplicar encapsulamento para proteger dados críticos (o saldo) e implementar um TAD cujas operações validam suas próprias regras.
//Especificação do TAD CarteiraDigital
//Dados (todos private):
//Dado	Descrição
//titular	Nome do dono da carteira
//saldo	Valor disponível na carteira
//limitePorOperacao	Valor máximo permitido em uma única operação
//extrato	Array com as últimas 10 movimentações
//quantidadeMovimentos	Quantas posições do extrato estão ocupadas
//Operações (todas public):
//Operação	O que faz	Pré-condições (se falharem, devolve false)
//CarteiraDigital(titular, limitePorOperacao)	Cria a carteira com saldo zero	Limite maior que zero
//depositar(valor)	Soma o valor ao saldo e registra no extrato	valor > 0 e valor <= limitePorOperacao
//sacar(valor)	Subtrai do saldo e registra no extrato	valor > 0, valor <= limitePorOperacao e saldo suficiente
//transferir(destino, valor)	Retira da carteira atual e deposita na carteira destino, registrando nas duas	As mesmas do saque, e destino não pode ser nulo nem a própria carteira
//consultarSaldo()	Devolve o saldo atual	Nenhuma
//listarExtrato()	Devolve um texto com as movimentações, da mais antiga para a mais recente	Nenhuma
//Regra do extrato: guarda apenas as 10 últimas movimentações. Quando estiver cheio, a mais antiga é descartada para abrir espaço para a nova. Operações que falharam não aparecem no extrato.
//Classes a implementar
//Classe	Papel
//Movimentacao	Representa uma linha do extrato: tipo (ex.: "DEPÓSITO"), valor e métodos de leitura, mais um toString() legível
//CarteiraDigital	O TAD, conforme a especificação acima
//AppCarteira	Programa principal, com main e menu
//Programa principal
//O programa deve:
//        1. Criar duas carteiras (nomes dos titulares informados pelo usuário, limite de R$ 1.000,00 cada).
//        2. Exibir um menu que se repete até o usuário sair, com as opções: depositar, sacar, transferir, consultar saldo, ver extrato e sair.
//    3. Em cada operação, perguntar qual carteira (1 ou 2) está agindo. Na transferência, a outra carteira é o destino.
//    4. Informar claramente quando uma operação for recusada e o motivo (valor inválido, acima do limite ou saldo insuficiente).
