//Crie um programa que leia 10 números inteiros e mostre o maior e o menor valor.

let primeiroNumero = parseInt(prompt("Digite o 1º número:"));
let maior = primeiroNumero;
let menor = primeiroNumero;

for (let contador = 2; contador <= 10; contador++) {
  let numero = parseInt(prompt("Digite o " + contador + "º número:"));
  if (numero > maior) maior = numero;
  if (numero < menor) menor = numero;
}

console.log("Maior número:", maior);
console.log("Menor número:", menor);