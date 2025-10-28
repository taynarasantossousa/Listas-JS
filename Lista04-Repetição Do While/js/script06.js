//Crie um programa que leia 10 números inteiros e mostre o maior e o menor valor.

let contadora = 1;
let maiorNumero, menorNumero;

do {
  let valorLido = parseInt(prompt(`Digite o ${contadora}º número:`));

  if (contadora === 1) {
    maiorNumero = valorLido;
    menorNumero = valorLido;
  } else {
    if (valorLido > maiorNumero) maiorNumero = valorLido;
    if (valorLido < menorNumero) menorNumero = valorLido;
  }
  contadora++;
} while (contadora <= 10);

console.log("Maior número digitado:", maiorNumero);
console.log("Menor número digitado:", menorNumero);
