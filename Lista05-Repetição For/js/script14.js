//Escreva um programa que leia 5 nomes e os exiba em ordem invertida.

let nomes = [];
for (let posicao = 1; posicao <= 5; posicao++) {
  nomes.push(prompt("Digite o nome " + posicao + ":"));
}
for (let posicao = 4; posicao >= 0; posicao--) {
  console.log(nomes[posicao]);
}
