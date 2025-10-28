let salario = parseFloat(prompt("Digite o salário:"));
let bonus = salario > 2000 ? salario * 0.10 : salario * 0.05;
alert("Bônus: R$ " + bonus.toFixed(2));