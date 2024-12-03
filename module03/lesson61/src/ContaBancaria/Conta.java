package ContaBancaria;


public class Conta {
    private String numeroConta;
    private String usuario;
    private double saldo;

    public Conta(String numeroConta, String usuario, double saldo) {
        this.numeroConta = numeroConta;
        this.usuario = usuario;
        this.saldo = saldo;
    }

    public double consultarSaldo(String nome) {
        if (this.usuario.equalsIgnoreCase(nome)) {
            return this.saldo;
        }
        System.out.println("Usuário não correspondente ao titular da conta.");
        return 0.0;
    }

    public void depositar(double valor) {
        if(valor > 0) {
            this.saldo += valor;
            System.out.println("Depósito de R$ " + valor + " realizado!");
        } else {
            System.out.println("Valos inválido, precisa ser maior que zero.");
        }
    }

    public void sacar(double valor) {
        if(valor > 0 && valor <= this.saldo) {
            saldo -= valor;
            System.out.println("Saque de R$ " + valor + " realizado!");
        } else if (valor > this.saldo) {
            System.out.println("Saldo insuficiente para sacar esta quantidade.");
        } else {
            System.out.println("Entrada inválida. ");
        };

    }

    public void imprimirDetalhes() {
        System.out.println("Conta número: " + this.numeroConta);
        System.out.println("Titular: " + this.usuario);
        System.out.println("Saldo atual: R$ " + this.saldo);
    }
}
