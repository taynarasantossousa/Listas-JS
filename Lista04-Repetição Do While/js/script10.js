//Faça um programa que mostre todos os números ímpares entre 100 e 200.

let numeroInicial = 100;
do {
  if (numeroInicial % 2 !== 0) {
    console.log(numeroInicial);
  }
  numeroInicial++;
} while (numeroInicial <= 200);