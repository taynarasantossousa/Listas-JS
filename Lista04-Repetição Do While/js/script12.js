 //Crie um programa que leia um número inteiro e calcule o seu fatorial.

 let numeroFatorial = parseInt(prompt("Informe um número:"));
let resultado = 1;
let contador = 1;

do {
  resultado *= contador;
  contador++;
} while (contador <= numeroFatorial);

console.log(`Fatorial de ${numeroFatorial} é ${resultado}`);
