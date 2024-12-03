package Estoque;

import java.util.ArrayList;

public class Estoque {
    // Criacao do Array Produto
    ArrayList<Produto> produtos;

    // Constructor
    public Estoque() {
        this.produtos = new ArrayList<>();
    }

    // Metodo que adiciona produto ao Array (nao confundir com o metodo "adicionarQuantidade", da classe produto, que modifica quantidade de produto específico, por isso está na classe Produto)
    public void adicionarProduto(Produto produto) {
        produtos.add(produto);
    }

    // Metodo para percorrer estoque e encontrar produto (nao confundir com o metodo consultarQuantidade, que consulta a quantidade de um produto específico. aqui buscamos uma correspondência da string nome)
    public Produto consultarProduto(String nome) {
        for (Produto p : produtos) {
            if (p.getNome().equalsIgnoreCase(nome)) {
                return p;
            }
        }
        return null;
    }

    // Metodo que remove produto do array, diferente do metodo removerQuantidade da classe Produto, que só altera o valor da variável quantidade.
    public void removerProduto(String nome) {
        Produto produto = consultarProduto(nome);
        if (produto != null) {
            produtos.remove(produto);
        } else {
            System.out.println("Produto não encontrado.");
        }
    }

    // Percorre o array e exibe os produtos cadastrados
    public void exibirEstoque() {
        if (produtos.isEmpty()) {
            System.out.println("Estoque vazio!");
        } else {
            for (Produto p : produtos) {
                System.out.println(p);
            }
        }
    }

}