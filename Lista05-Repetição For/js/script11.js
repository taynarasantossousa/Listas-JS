//Escreva um programa que leia 10 idades e calcule a quantidade de pessoas maiores de idade.

let maiores = 0;
for (let pessoa = 1; pessoa <= 10; pessoa++) {
  let idade = parseInt(prompt("Digite a idade da pessoa " + pessoa + ":"));
  if (idade >= 18) {
    maiores++;
  }
}
console.log("Pessoas maiores de idade:", maiores);
