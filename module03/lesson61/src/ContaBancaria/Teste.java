package ContaBancaria;

public class Teste {
    public static void main(String[] args) {
        Usuario usuario1 = new Usuario("João", "85267406013");

        Conta conta1 = new Conta("856871", "aline", 15.000);

        conta1.imprimirDetalhes();

        conta1.depositar(13000);
        conta1.consultarSaldo("aline");
        conta1.imprimirDetalhes();
    }
}
