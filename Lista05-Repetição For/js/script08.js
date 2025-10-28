//Escreva um programa que mostre a sequência de Fibonacci até o décimo termo.

let anterior = 0;
let atual = 1;
console.log(anterior);
console.log(atual);

for (let termo = 3; termo <= 10; termo++) {
  let proximo = anterior + atual;
  console.log(proximo);
  anterior = atual;
  atual = proximo;
}
