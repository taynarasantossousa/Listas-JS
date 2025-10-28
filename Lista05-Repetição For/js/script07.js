//Faça um programa que leia 5 números inteiros e calcule a média aritmética.

let soma = 0;
for (let contador = 1; contador <= 5; contador++) {
  let numero = parseFloat(prompt("Digite o " + contador + "º número:"));
  soma += numero;
}
let media = soma / 5;
console.log("Média =", media);
