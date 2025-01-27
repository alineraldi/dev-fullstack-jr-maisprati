package Exercicio1;// Crie um sistema de uma loja que vende produtos:

// Classe Exercicio1.Produto:
// Atributos: nome, preco.
// Metodo: calcularPrecoFinal(), que retorna o preco sem alterações.

// Subclasse Exercicio1.ProdutoPerecivel:
// Atributos adicionais: dataDeValidade.
// Sobrescreva o metodo calcularPrecoFinal() para aplicar um desconto de 10% caso o produto esteja próximo
// da data de validade.

// Subclasse Exercicio1.ProdutoEletronico:
// Atributos adicionais: garantiaEmMeses.
// Sobrescreva o metodo calcularPrecoFinal() para incluir uma taxa de garantia de 5% no preco.

// Implemente as classes e crie uma lista de produtos com diferentes tipos. Mostre o preco final de
// cada produto usando o polimorfismo.
import java.time.LocalDate;

public class Loja {
    public static void main(String[] args) {
        Produto produto1 = new ProdutoEletronico("lapis", 45.6, 2);
        Produto produto2 = new ProdutoPerecivel("lapis", 45.6, LocalDate.of(2222, 01, 24));

        produto1.exibirResumo();
        produto2.exibirResumo();
    }
}