let a = parseInt(prompt("Primeiro número:"));
let b = parseInt(prompt("Segundo número:"));
let c = parseInt(prompt("Terceiro número:"));
let numeros = [a, b, c];
numeros.sort((x, y) => x - y);
alert("Ordem crescente: " + numeros.join(", "));