//Escreva um programa que mostre a sequência de Fibonacci até o décimo termo.

let anterior = 0, atual = 1;
let posicao = 1;
console.log(anterior);

do {
  console.log(atual);
  let proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
  posicao++;
} while (posicao < 10);
