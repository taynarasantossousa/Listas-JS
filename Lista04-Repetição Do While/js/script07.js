// Faça um programa que leia 5 números inteiros e calcule a média aritmética.

let indice = 1;
let total = 0;

do {
  let valorInserido = parseFloat(prompt(`Digite o ${indice}º valor:`));
  total += valorInserido;
  indice++;
} while (indice <= 5);

let mediaFinal = total / 5;
console.log("Média dos números:", mediaFinal);
