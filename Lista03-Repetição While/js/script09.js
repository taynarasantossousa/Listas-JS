// Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "while" e exiba a média das idades.

let contadora = 1;
let soma = 0;

while (contadora <= 5) {
  let nome = prompt("Digite o nome da pessoa " + contadora + ":");
  let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
  soma += idade;
  contadora++;
}

console.log("Média das idades:", soma / 5);