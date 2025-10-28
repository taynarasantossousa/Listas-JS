//Crie um programa que exiba a tabuada de um número fornecido pelo usuário (de 1 a 10).

let valor = parseInt(prompt("Digite um número:"));
for (let contador = 1; contador <= 10; contador++) {
  console.log(`${valor} x ${contador} = ${valor * contador}`);
}