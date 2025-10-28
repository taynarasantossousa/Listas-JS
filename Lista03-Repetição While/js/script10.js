//Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "while".

let a = 0, b = 1;
let contadora = 1;

console.log(a);
console.log(b);

while (contadora <= 18) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
  contadora++;
}
