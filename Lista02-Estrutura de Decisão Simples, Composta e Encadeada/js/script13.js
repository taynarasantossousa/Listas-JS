let idadeApo = parseInt(prompt("Digite sua idade:"));
let sexo = prompt("Digite seu sexo (M/F):").toUpperCase();

if ((sexo === "M" && idadeApo >= 65) || (sexo === "F" && idadeApo >= 60)) {
  alert("Pode se aposentar.");
} else {
  alert("Ainda não pode se aposentar.");
}