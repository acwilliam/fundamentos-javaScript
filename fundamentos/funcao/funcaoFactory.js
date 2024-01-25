function criarProduto(nomeProduto, tipoProduto, categoriaProduto, precoProduto) {
    return {
        nome: nomeProduto,
        tipo: tipoProduto,
        categoria: categoriaProduto,
        preco: precoProduto,
    }
}

const produto = criarProduto('maçã', 'fruta', 'perecivel', 452)
console.log(produto);