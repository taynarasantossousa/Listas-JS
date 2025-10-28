// Faça um programa que calcule a soma dos números de 1 a 100.

alert("Somatório")
let somatorio = 0
let contadora = 1
do {
    somatorio = somatorio + contadora
    contadora++
} while (contadora < 101);
console.log("O valor final do somatório é: "+ somatorio)