//Faça um programa que peça ao usuário um número e exiba a soma de todos os múltiplos de 3 até esse número.

let limite = parseInt(prompt("Digite um número:"));
let soma = 0;
for (let numero = 1; numero <= limite; numero++) {
  if (numero % 3 === 0) {
    soma += numero;
  }
}
console.log("Soma dos múltiplos de 3 =", soma);
