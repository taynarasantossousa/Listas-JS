let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));

if (n1 > n2) {
  alert(n1 + " é maior.");
} else if (n2 > n1) {
  alert(n2 + " é maior.");
} else {
  alert("Os números são iguais.");
}