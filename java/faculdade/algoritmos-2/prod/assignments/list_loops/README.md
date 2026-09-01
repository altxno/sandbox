# Lista 03 — Estruturas de Repetição

Exercícios de lógica de repetição (`while`, `do-while`, `for`) da disciplina **Algoritmos e Programação 1**.  
Cada exercício é uma classe independente com um método `executar()` chamado pelo menu principal do SwissKnife.

---

## Exercícios

### Ex01 — Contador de caracteres até ponto final
Peça ao usuário para digitar caracteres um a um. Quando ele digitar um ponto final (.), pare a leitura e informe quantos caracteres foram digitados.

---

### Ex02 — Contador de vogais em palavra
Peça uma palavra e conte quantas vogais ela contém (sem usar array, apenas com repetição e `charAt`).

---

### Ex03 — Repetidor de palavras
Peça uma palavra e um número **n**. Mostre a palavra repetida **n** vezes, uma por linha.

---

### Ex04 — Loop de frases até "sair"
Leia frases do usuário em loop. Quando ele digitar **"sair"**, o programa termina.

---

### Ex05 — Validação de tamanho de nome
Continue pedindo um nome até que o usuário digite algo com pelo menos **3 letras**.

---

### Ex06 — Confirmação de senha
Solicite uma senha e peça confirmação até que ambas coincidam.

---

### Ex07 — Jogo de adivinhação
Número fixo oculto. O usuário tem até **5 tentativas** para adivinhar o número correto.

---

### Ex08 — Sistema de votação
Permita votar em três candidatos até que a palavra **"fim"** seja digitada. Ao final, exiba a contagem de votos.

---

### Ex09 — Simulação de Caixa Eletrônico
Simule um caixa eletrônico que permite vários saques até o saldo acabar ou o usuário escolher sair.

---

### Ex10 — Pergunta com repetição
Faça uma pergunta (ex: "Qual a capital do Brasil?") e repita até que o usuário acerte a resposta.

---

### Ex11 — Validação de CPF (Dígitos)
Peça o CPF (apenas números) até que seja digitado com exatamente **11 dígitos**.

---

### Ex12 — Quiz de 5 perguntas
Faça 5 perguntas em sequência e, ao final, informe quantas foram respondidas corretamente.

---

### Ex13 — Repetição de letra na linha
Peça uma letra e um número **n**. Mostre **n** vezes essa letra em uma mesma linha.

---

### Ex14 — Simulador de dados
Simule o lançamento de um dado **10 vezes**, mostrando os resultados (use `java.util.Random`).

---

### Ex15 — Menu interativo
Mostre um menu com 3 opções. Repita a exibição do menu até o usuário escolher a opção **"Sair"**.

---

### Ex16 — Contador de vogais até 'x'
Peça letras uma a uma até que o usuário digite a letra **"x"**. Durante o processo, conte quantas vogais foram digitadas.

---

### Ex17 — Cadastro de produtos e total
Permita o cadastro de nome e preço de produtos até que **"fim"** seja digitado. Calcule e exiba o total geral.

---

### Ex18 — Contador de palavras
Peça uma frase e conte quantas palavras ela tem (com base nos espaços em branco).

---

### Ex19 — Validação de senha forte
Repetir a solicitação de senha até que ela contenha: uma letra maiúscula, um número e no mínimo 8 caracteres.

---

### Ex20 — Localizador de caractere
Peça uma palavra e um caractere específico. Conte e informe quantas vezes esse caractere aparece na palavra.

---

### Ex21 — Filtro de intervalo
Peça um número entre **1 e 100**. Repita a solicitação enquanto o valor estiver fora desse intervalo.

---

### Ex22 — Soma de dígitos em String
Peça uma string e some os dígitos numéricos presentes nela (ex: "a2c4" → resultado 6).

---

## Padrão das classes
```java
package com.swissknife.exercicios.ap1.lista03;

import java.util.Scanner;

public class Ex01Exemplo {

    public static void executar() {
        Scanner sc = new Scanner(System.in);
        // lógica do exercício
    }

}
