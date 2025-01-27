package Estoque;

public class Teste {
        public static void main(String[] args) {
        Estoque estoque = new Estoque();

        Produto produto1 = new Produto("lapis", 5.99, 2);
        Produto produto2 = new Produto("borracha", 1.90, 5);

        estoque.exibirEstoque();

        estoque.adicionarProduto(produto1);
        estoque.adicionarProduto(produto2);

        System.out.println("Estoque após modificações: \n");
        estoque.exibirEstoque();
    }
}
