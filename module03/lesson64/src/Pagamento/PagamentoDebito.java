package Pagamento;

public class PagamentoDebito extends Pagamento {
    public PagamentoDebito(double valor) {
        super(valor);
    }

    @Override
    public void realizarPagamento() {
        double valorFinal = valor + (valor * 0.01);
        System.out.println("Pagamento com cartão de débito. Valor com taxa: " + valorFinal);
    }
}
