let salarioMin = parseFloat(prompt("Salário mínimo:"));
let salarioFunc = parseFloat(prompt("Salário do funcionário:"));
let qtdSalarios = salarioFunc / salarioMin;
alert("Recebe " + qtdSalarios.toFixed(2) + " salários mínimos.");