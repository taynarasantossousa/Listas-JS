//Escreva um programa que calcule a soma dos números pares de 1 a 200.

alert("pares de 1 até 200")

let somatorio = 0
let contadora = 1
do {
    if (contadora % 2 == 0) {
        somatorio = somatorio + contadora
    }
    contadora++
} while (contadora < 201);
console.log("O valor final do somatório dos números pares de 1 até 200 é: " + somatorio)