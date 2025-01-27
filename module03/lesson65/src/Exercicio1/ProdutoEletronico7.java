package Exercicio1;// Subclasse Exercicio1.ProdutoEletronico:
// Atributos adicionais: garantiaEmMeses.
// Sobrescreva o metodo calcularPrecoFinal() para incluir uma taxa de garantia de 5% no preco.


class ProdutoEletronico extends Produto {
    private int garantiaEmMeses;

    public ProdutoEletronico(String nome, double preco, int garantiaEmMeses) {
        super(nome, preco);
        this.garantiaEmMeses = garantiaEmMeses;
    }

    @Override
    public double calcularPrecoFinal() {
        return getPreco() * 0.05;
    }

    public int getGarantiaEmMeses() {
        return garantiaEmMeses;
    }

    public void setGarantiaEmMeses(int garantiaEmMeses) {
        this.garantiaEmMeses = garantiaEmMeses;
    }
}
