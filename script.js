// script.js
document.addEventListener('DOMContentLoaded', function() {
    const produtoImg = document.getElementById('produtoImg');
    const produtoNome = document.getElementById('produtoNome');
    const preco = document.getElementById('preco');

    // Exemplo de como mudar a imagem e informações do produto
    const produtos = [
        { img: 'roupa1.jpg', nome: 'Vestido Floral', preco: 'R$ 99,90' },
        { img: 'roupa2.jpg', nome: 'Blusa de Seda', preco: 'R$ 79,90' },
        { img: 'roupa3.jpg', nome: 'Calça Jeans', preco: 'R$ 129,90' }
    ];

    let currentProduct = 0;

    function changeProduct() {
        produtoImg.src = produtos[currentProduct].img;
        produtoNome.textContent = produtos[currentProduct].nome;
        preco.textContent = produtos[currentProduct].preco;
        currentProduct = (currentProduct + 1) % produtos.length;
    }

    setInterval(changeProduct, 5000); // Muda o produto a cada 5 segundos
});