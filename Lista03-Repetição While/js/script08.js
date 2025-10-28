//Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "while".

let limite = parseInt(prompt("Gerar Fibonacci até:"));
let a = 0, b = 1;

console.log(a);
let contadora = 1;

while (b <= limite) {
  console.log(b);
  let temp = b;
  b = a + b;
  a = temp;
  contadora++;
}
