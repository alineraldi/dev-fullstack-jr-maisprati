package Pagamento;

public class SistemaPagamentos {
    public static void main(String[] args) {

        //Criacao de diferentes objetos para diferentes tipos de pagamento
        Pagamento pagamentoCredito = new PagamentoCredito(100.0);
        Pagamento pagamentoDebito = new PagamentoDebito(100.0);
        Pagamento pagamentoPix = new PagamentoPix(100.0);

        // Demonstracao de polimorfismo
        pagamentoCredito.realizarPagamento();
        pagamentoDebito.realizarPagamento();
        pagamentoPix.realizarPagamento();

        // Demonstracao de Sobrecarga
        ((PagamentoPix) pagamentoPix).realizarPagamento("Compra no mercado");
    }
}
