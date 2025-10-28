//Crie um programa que desenhe na tela um triângulo de asteriscos com base em um número informado pelo usuário.

let base = parseInt(prompt("Informe a base do triângulo:"));
let linha = 1;
do {
  console.log("*".repeat(linha));
  linha++;
} while (linha <= base);
