// Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "while".

let num = parseInt(prompt("Digite um número para ver a tabuada:"));
let contadora = 1;

while (contadora <= 10) {
  console.log(`${num} x ${contadora} = ${num * contadora}`);
  contadora++;
}
