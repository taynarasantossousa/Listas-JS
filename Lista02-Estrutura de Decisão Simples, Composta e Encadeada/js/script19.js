let idadeVoto = parseInt(prompt("Digite sua idade:"));
if (idadeVoto < 16) {
  alert("Não pode votar.");
} else if (idadeVoto >= 18 && idadeVoto <= 70) {
  alert("Voto obrigatório.");
} else {
  alert("Voto facultativo.");
}