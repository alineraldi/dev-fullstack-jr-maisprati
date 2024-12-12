package Exercicio1;// Subclasse Exercicio1.ProdutoPerecivel:
// Atributos adicionais: dataDeValidade.
// Sobrescreva o metodo calcularPrecoFinal() para aplicar um desconto de 10% caso o produto esteja próximo
// da data de validade.
import java.time.LocalDate;

class ProdutoPerecivel extends Produto {
    private LocalDate dataDeValidade;

    public ProdutoPerecivel(String nome, double preco, LocalDate dataDeValidade) {
        super(nome, preco);
        this.dataDeValidade = dataDeValidade;
    }

    @Override
    public double calcularPrecoFinal() {
        LocalDate dataAtual = LocalDate.now();

        if(!dataDeValidade.isAfter((dataAtual.plusDays(7)))){
            return getPreco() * 0.1;
        }

        return getPreco();
    }


    public LocalDate getDataDeValidade() {
        return dataDeValidade;
    }

    public void setDataDeValidade(LocalDate dataDeValidade) {
        this.dataDeValidade = dataDeValidade;
    }
}
