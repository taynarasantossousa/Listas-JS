//Crie um programa que desenhe na tela um triângulo de asteriscos com base em um número informado pelo usuário.

let linhas = parseInt(prompt("Digite o número de linhas:"));
for (let linha = 1; linha <= linhas; linha++) {
  console.log("*".repeat(linha));
}