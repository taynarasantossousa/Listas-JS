let nome1 = prompt("Nome da primeira pessoa:");
let idade1 = parseInt(prompt("Idade da primeira pessoa:"));
let nome2 = prompt("Nome da segunda pessoa:");
let idade2 = parseInt(prompt("Idade da segunda pessoa:"));

if (idade1 > idade2) {
  alert(nome1 + " é mais velho(a).");
} else if (idade2 > idade1) {
  alert(nome2 + " é mais velho(a).");
} else {
  alert("As duas pessoas têm a mesma idade.");
}