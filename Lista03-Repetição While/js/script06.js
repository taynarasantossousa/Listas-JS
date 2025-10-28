// Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "while".

let num = parseInt(prompt("Digite um número inteiro positivo:"));
let contadora = 1;

console.log("Divisores de", num + ":");
while (contadora <= num) {
  if (num % contadora === 0) {
    console.log(contadora);
  }
  contadora++;
}
