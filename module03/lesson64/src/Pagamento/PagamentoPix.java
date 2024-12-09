package Pagamento;

public class PagamentoPix extends Pagamento {
    public PagamentoPix(double valor) {
        super(valor);
    }

    @Override
    public void realizarPagamento() {
        double valorFinal = valor;
        System.out.println("Pagamento com pix (sem taxas). Valor: " + valorFinal);
    }

    public void realizarPagamento (String descricao) {
        System.out.println("Pagamento via Pix. Valor R$" + valor + " Descrição: " + descricao);
    }
}
