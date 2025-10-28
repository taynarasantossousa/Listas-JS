let codigo = parseInt(prompt("Código do produto (1 a 3):"));
let quantidade = parseInt(prompt("Quantidade comprada:"));
let preco;

if (codigo === 1) preco = 5;
else if (codigo === 2) preco = 8;
else if (codigo === 3) preco = 10;
else preco = 0;

if (preco > 0) {
  alert("Valor total: R$ " + (preco * quantidade).toFixed(2));
} else {
  alert("Código inválido.");
}