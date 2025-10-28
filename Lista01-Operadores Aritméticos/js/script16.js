let nome = prompt("Digite o nome do produto:");
let preco = parseFloat(prompt("Digite o preço do produto:"));

// Define o artigo com base na terminação do nome do produto

let artigo = "o"; // padrão masculino
if (nome.toLowerCase().endsWith("a")) {
    artigo = "a"; // feminino
}

let desconto = preco * 0.10;
let precoComDesconto = preco - desconto;

alert(`${artigo.charAt(0).toUpperCase() + artigo.slice(1)} ${nome} com 10% de desconto custa R$ ${precoComDesconto.toFixed(2)}`);