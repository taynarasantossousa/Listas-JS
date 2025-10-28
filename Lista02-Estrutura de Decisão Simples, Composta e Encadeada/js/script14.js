let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));
let imc = peso / (altura * altura);

let msg = "Seu IMC é " + imc.toFixed(2) + ". ";
if (imc < 18.5) msg += "Abaixo do peso.";
else if (imc < 25) msg += "Peso normal.";
else if (imc < 30) msg += "Sobrepeso.";
else msg += "Obesidade.";

alert(msg);