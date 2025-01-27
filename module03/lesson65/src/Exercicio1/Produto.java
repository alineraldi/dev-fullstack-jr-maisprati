package Exercicio1;// Classe Exercicio1.Produto:
// Atributos: nome, preco.
// Metodo: calcularPrecoFinal(), que retorna o preco sem alterações.

public abstract class Produto {
    String nome;
    double preco;

    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public abstract double calcularPrecoFinal();

    public void exibirResumo() {
        System.out.println("Exercicio1.Produto: " + getNome() + " Preço final: " + String.format("% .2f", calcularPrecoFinal()));
        return;
    }
}
