package Pagamento;//Sistema de Pagamentos
//Implemente um sistema de pagamentos com:
//
//Uma classe base Pagamento com um método realizarPagamento().
//
//Subclasses:
//
//PagamentoCredito: Aplica uma taxa de 2%.
//PagamentoDebito: Aplica uma taxa de 1%.
//PagamentoPix: Não aplica taxas.
//        Sobrecarga:
//
//Use sobrecarga em PagamentoPix para criar um metodo que permita adicionar uma descrição da transação.
//No programa principal:
//
//Processe pagamentos de diferentes formas.
//Demonstre o uso de polimorfismo e sobrecarga.


public class Pagamento {
    protected double valor; // Por que protected? Para poderser usada pelas proprias classes, classes filhas e classes do mesmo pacote

    // Construtor quer inicializa o valor do pagamento

    public Pagamento(double valor) {
        this.valor = valor;
    }

    // Metodo generico para realizar o pagamento
    public void realizarPagamento() {
        System.out.println("Pagamento realizado! Valor: " + valor);
    }
}
