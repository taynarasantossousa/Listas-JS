// Crie um programa que leia um número inteiro e calcule o seu fatorial.

let numero = parseInt(prompt("Digite um número:"));
let fatorial = 1;
for (let contador = 1; contador <= numero; contador++) {
  fatorial *= contador;
}
console.log("Fatorial =", fatorial);
