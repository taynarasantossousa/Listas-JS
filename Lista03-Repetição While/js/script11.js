//Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "while".

let numero = parseInt(prompt("Digite um número:"));
let contadora = 1;
let soma = 0;

while (contadora <= numero) {
  if (contadora % 2 === 0) {
    soma += contadora;
  }
  contadora++;
}

console.log("Soma dos pares até", numero, "=", soma);
