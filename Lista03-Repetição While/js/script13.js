// Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "while".

let num = parseInt(prompt("Digite um número inteiro:"));
let texto = String(num);
let contadora = 0;

while (contadora < texto.length) {
  console.log(texto[contadora]);
  contadora++;
}
