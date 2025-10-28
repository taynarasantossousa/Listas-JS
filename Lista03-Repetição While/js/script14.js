// Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "while".

let num = parseInt(prompt("Digite um número para calcular o fatorial:"));
let contadora = 1;
let fatorial = 1;

while (contadora <= num) {
  fatorial *= contadora;
  contadora++;
}

console.log("Fatorial de", num, "=", fatorial);