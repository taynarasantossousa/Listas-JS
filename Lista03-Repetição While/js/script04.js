//Faça um programa que leia 5 números inteiros usando o loop "while" e exiba a média aritmética dos valores lidos.

let contadora = 1;
let soma = 0;

while (contadora <= 5) {
  let numero = parseInt(prompt("Digite o número " + contadora + ":"));
  soma += numero;
  contadora++;
}

let media = soma / 5;
console.log("Média =", media);