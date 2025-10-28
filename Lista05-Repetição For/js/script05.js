// Escreva um programa que calcule a soma dos números pares de 1 a 200.

let soma = 0;
for (let numero = 1; numero <= 200; numero++) {
  if (numero % 2 === 0) {
    soma += numero;
  }
}
console.log("Soma dos pares =", soma);
