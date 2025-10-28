//Crie um programa que peça ao usuário um número inteiro N e mostre os números de 1 até N.

let limite = parseInt(prompt("Informe o limite final:"));
let n = 1;
do {
  console.log(n);
  n++;
} while (n <= limite);
