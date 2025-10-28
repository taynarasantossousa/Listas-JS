//Escreva um programa que leia 10 idades e calcule a quantidade de pessoas maiores de idade.

let quantidade = 1;
let adultos = 0;

do {
  let idade = parseInt(prompt(`Digite a idade da pessoa ${quantidade}:`));
  if (idade >= 18) {
    adultos++;
  }
  quantidade++;
} while (quantidade <= 10);

console.log("Total de maiores de idade:", adultos);
