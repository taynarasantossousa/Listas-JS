//Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "while".

let num = parseInt(prompt("Digite um número:"));
let contadora = 1;
let divisores = 0;

while (contadora <= num) {
  if (num % contadora === 0) {
    divisores++;
  }
  contadora++;
}

if (divisores === 2) {
  console.log(num + " é primo");
} else {
  console.log(num + " não é primo");
}
