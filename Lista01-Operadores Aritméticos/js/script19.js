let base = parseFloat(prompt("Digite a base do triângulo:"));
let altura = parseFloat(prompt("Digite a altura do triângulo:"));

let hipotenusa = Math.sqrt(base ** 2 + altura ** 2);

alert("O valor da hipotenusa é: " + hipotenusa.toFixed(2));

//base ** 2 e altura ** 2 elevam os números ao quadrado.

//Math.sqrt() calcula a raiz quadrada.