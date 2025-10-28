// Crie um programa que leia o nome e a idade de várias pessoas usando o loop "while" até que o nome "fim" seja informado. Ao final, exiba a média das idades.

let soma = 0;
let contadora = 0;
let nome = prompt("Digite o nome (ou 'fim' para encerrar):");

while (nome !== "fim") {
  let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
  soma += idade;
  contadora++;
  nome = prompt("Digite o nome (ou 'fim' para encerrar):");
}

if (contadora > 0) {
  console.log("Média das idades:", soma / contadora);
} else {
  console.log("Nenhum dado informado.");
}