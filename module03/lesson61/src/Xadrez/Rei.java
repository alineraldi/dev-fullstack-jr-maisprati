package Xadrez;

public class Rei extends Peca {
    public Rei(String cor, int linha, int coluna) {
        super(cor, linha, coluna); /* Chama o construtor da classe base "peca" */
    }

    // O rei se movimenta em qualquer direção, mas apenas uma casa

    @Override
    public boolean mover(int novaLinha, int novaColuna) { // Verifica se o movimento do rei é válido
        // A função Math.abs retorna o valor absoluto da diferença entre 2 numeros
        return Math.abs(this.linha - novaLinha) <= 1 // Se o movimento entre uma linha e outra for de 1
                && Math.abs(this.coluna - novaColuna) <= 1; // e o movimento entre uma coluna e outra for de 1
        // Então o movimento é válido!
    }
}
