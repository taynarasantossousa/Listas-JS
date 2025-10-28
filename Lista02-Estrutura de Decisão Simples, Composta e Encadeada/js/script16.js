let qtd = parseInt(prompt("Quantidade de maçãs:"));
let preco = qtd >= 12 ? 0.40 : 0.50;
let total = qtd * preco;
alert("Valor total: R$ " + total.toFixed(2));