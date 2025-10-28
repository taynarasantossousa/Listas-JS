let nomeAluno = prompt("Nome do aluno:");
let notaAluno = parseFloat(prompt("Nota do aluno:"));
if (notaAluno >= 7) {
  alert(nomeAluno + " está Aprovado.");
} else {
  alert(nomeAluno + " está em Recuperação.");
}