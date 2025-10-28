let nome = prompt("Digite seu nome:");
let turno = prompt("Turno (M/V):").toUpperCase();

if (turno === "M") {
  alert("Bom dia, " + nome + "!");
} else if (turno === "V") {
  alert("Boa tarde, " + nome + "!");
} else {
  alert("Turno inválido.");
}