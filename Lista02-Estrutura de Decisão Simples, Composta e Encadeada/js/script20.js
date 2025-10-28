let nA = parseFloat(prompt("Primeiro número:"));
let nB = parseFloat(prompt("Segundo número:"));
let nC = parseFloat(prompt("Terceiro número:"));
let media = (nA + nB + nC) / 3;

if (media >= 7) {
  alert("Aprovado com média " + media.toFixed(2));
} else {
  alert("Reprovado com média " + media.toFixed(2));
}