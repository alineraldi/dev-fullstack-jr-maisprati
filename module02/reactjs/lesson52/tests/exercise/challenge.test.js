const CarrinhoDeCompras = require('./challenge')

describe('CarrinhoDeCompras', () => {
    //describe agrupa testes relacionados de uma mesma funcionalidade ou classe, facilitando a leitura e a manutenção.
    test('Deve adicionar produtos ao carrinho', () => {
        const carrinho = new CarrinhoDeCompras();
        carrinho.adicionarProduto('Camiseta', 20, 2);
        expect(carrinho.listarProdutos()).toEqual([{ nome: 'Camiseta', preco: 20, quantidade: 2}]);
    });

    test('Deve incrmenetar a quantidade de um produto existente', () => {
        const carrinho = new CarrinhoDeCompras();
        carrinho.adicionarProduto('Camiseta', 20, 2);
        carrinho.adicionarProduto('Camiseta', 20, 1);
        expect(carrinho.listarProdutos()).toEqual([{ nome: 'Camiseta', preco: 20, quantidade: 3}]);
    });

    test('Deve remover um produto existente', () => {
        const carrinho = new CarrinhoDeCompras();
        carrinho.adicionarProduto('Camisa', 20, 1);
        carrinho.removerProduto('Camisa');
        expect(carrinho.listarProdutos()).toEqual([]);
    });

    test('Deve lançar um erro ao remover um produto inexistente', () => {
        const carrinho = new CarrinhoDeCompras();
        expect(() => carrinho.removerProduto('Camiseta')).toThrow('Produto não encontrado');
        // toThrow serve para verificar se uma função lança um erro durante a execução do código, permitindo validar comportamentos de erro no seu código.
    });

    test('Deve calcular o total corretamente com diferentes produtos e quntidades', () => {
        const carrinho = new CarrinhoDeCompras();

        carrinho.adicionarProduto('Camiseta', 20, 2);
        carrinho.adicionarProduto('Calça', 50, 1);
        carrinho.adicionarProduto('Tênis', 30, 3);

        const totalEsperado = 20 * 2 + 50 * 1 + 30 * 3;

        expect(carrinho.calcularTotal()).toBe(totalEsperado);
    });

    test('Deve retornar os valores corretos ao listar os produtos', () => {
        const carrinho = new CarrinhoDeCompras();

        carrinho.adicionarProduto('Camiseta', 20, 2);
        carrinho.adicionarProduto('Calça', 50, 1);

        const resultadosEsperados = [
            { nome: 'Camiseta', preco: 20, quantidade: 2 },
            { nome: 'Calça', preco: 50, quantidade: 1 }
        ]
        
        expect(carrinho.listarProdutos()).toEqual(resultadosEsperados);
    })


})