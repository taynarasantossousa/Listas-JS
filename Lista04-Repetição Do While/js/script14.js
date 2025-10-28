// Escreva um programa que leia 5 nomes e os exiba em ordem invertida.

let listaNomes = [];
let indiceNome = 1;

do {
  let nomeDigitado = prompt(`Digite o ${indiceNome}º nome:`);
  listaNomes.push(nomeDigitado);
  indiceNome++;
} while (indiceNome <= 5);

let nome = listaNomes.length - 1;
do {
  console.log(listaNomes[nome]);
  nome--;
} while (nome >= 0);
