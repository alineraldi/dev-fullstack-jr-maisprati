class CarrinhoDeCompras {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(nome, preco, quantidade) {
        const produtoExistente = this.produtos.find(p => p.nome === nome); // A função find percorre o array this.produtos e busca o primeiro elemento que atende a uma condição. No caso, this.produtos é o array que contém os produtos existentes.
        if (produtoExistente) {
            produtoExistente.quantidade += quantidade;
        } else {
            this.produtos.push({ nome, preco, quantidade })
        }
    }

    removerProduto(nome) {
        const index = this.produtos.findIndex(p => p.nome === nome);
        if (index !== -1) {
            this.produtos.splice(index, 1); // Aqui, sploice remove um elemento do array this.produtos (posicao do elemento a remover, quantidade)
        } else {
            throw new Error('Produto não encontrado no carrinho.');
        }
    }

    calcularTotal() {
        return this.produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
        // O método reduce percorre o array e acumula um valor com base em uma função. 
        // Ele recebe dois parâmetros: o acumulador (iniciado em 0) e o item atual.
        // A cada iteração, o acumulador é atualizado e, no final, o valor acumulado é retornado.
    }

    listarProdutos() {
        return [...this.produtos];
        // A expressão [...this.produtos] utiliza o operador de espalhamento (ou spread operator) ... para criar uma cópia superficial (ou shallow copy) do array this.produtos.
    }
}

module.exports = CarrinhoDeCompras;