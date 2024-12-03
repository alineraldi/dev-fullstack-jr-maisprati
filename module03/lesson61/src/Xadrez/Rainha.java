package Xadrez;

public class Rainha extends Peca {
    public Rainha(String cor, int linha, int coluna) {
        super(cor, linha, coluna);
    };

    @Override
    public boolean mover(int novaLinha, int novaColuna) {
        // Verifica se o movimento é válido para a Rainha:
        // 1. Movimento na mesma linha (horizontal).
        // 2. Movimento na mesma coluna (vertical).
        // 3. Movimento diagonal, onde a diferença entre linha e coluna é a mesma.

        return this.linha == novaLinha
                || this.coluna == novaColuna
                // em um tabuleiro de xadrez, um movimento diagonal ocorre quando a diferença entre as coordenadas das linhas é igual à diferença entre as coordenadas das colunas.
                || Math.abs(this.linha - novaLinha) == Math.abs(this.coluna - novaColuna);
    }

}
