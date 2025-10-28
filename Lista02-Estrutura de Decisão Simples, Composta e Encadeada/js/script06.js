let n1 = parseFloat(prompt("Nota 1:"));
let n2 = parseFloat(prompt("Nota 2:"));
let n3 = parseFloat(prompt("Nota 3:"));
let media = (n1 + n2 + n3) / 3;

if (media >= 7) {
  alert("Aprovado com média " + media.toFixed(1));
} else {
  alert("Reprovado com média " + media.toFixed(1));
}