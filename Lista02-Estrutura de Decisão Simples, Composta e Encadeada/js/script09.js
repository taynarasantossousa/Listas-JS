let mes = prompt("Digite o nome do mês:").toLowerCase();

if (["janeiro", "março", "maio", "julho", "agosto", "outubro", "dezembro"].includes(mes)) {
  alert("31 dias");
} else if (["abril", "junho", "setembro", "novembro"].includes(mes)) {
  alert("30 dias");
} else if (mes === "fevereiro") {
  alert("28 ou 29 dias");
} else {
  alert("Mês inválido");
}