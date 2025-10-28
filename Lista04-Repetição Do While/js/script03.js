// Crie um programa que exiba a tabuada de um número fornecido pelo usuário (de 1 a 10).

alert("Tabuada")
let numero = parseInt(prompt("Digite um número para saber o valor de sua tabuada:"));
let contadora = 1
do {
    console.log(numero + " X " + contadora + " = " + numero * contadora)
    contadora++
} while (contadora < 11);