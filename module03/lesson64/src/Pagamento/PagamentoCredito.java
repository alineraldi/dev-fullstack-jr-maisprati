package Pagamento;

public class PagamentoCredito extends Pagamento {
    public PagamentoCredito(double valor) {
        super(valor);
    }

    @Override
    public void realizarPagamento() {
        double valorFinal = valor + (valor * 0.02);
        System.out.println("Pagamento com cartão de crédito. Valor com taxa: " + valorFinal);
    }
}
