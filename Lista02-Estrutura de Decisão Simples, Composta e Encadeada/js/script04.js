let idadePessoa = parseInt(prompt("Digite sua idade:"));

if (idadePessoa < 12) {
  alert("Criança");
} else if (idadePessoa < 18) {
  alert("Adolescente");
} else if (idadePessoa < 60) {
  alert("Adulto");
} else {
  alert("Idoso");
}