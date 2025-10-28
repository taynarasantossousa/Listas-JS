let nome = prompt("Digite o primeiro nome:");
let nome2 = prompt("Digite o segundo  nome:");
let nome3 = prompt("Digite o terceiro nome:");

let idade = parseInt(prompt("Digite a primeira idade;"));
let idade2 = parseInt(prompt("Digite a segunda idade;"));
let idade3 = parseInt(prompt("Digite a terceira idade;"));

let soma = idade + idade2 +idade3;
let media = soma / 3;

alert("A soma das idades é: " + soma + " e a média é: " + media.toFixed(0));