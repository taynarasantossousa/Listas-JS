//Faça um programa que peça ao usuário um número e exiba a soma de todos os múltiplos de 3 até esse número.

let limiteFinal = parseInt(prompt("Digite o valor limite:"));
let acumulador = 0;
let verificador = 1;

do {
  if (verificador % 3 === 0) {
    acumulador += verificador;
  }
  verificador++;
} while (verificador <= limiteFinal);

console.log(`Soma dos múltiplos de 3 até ${limiteFinal}: ${acumulador}`);