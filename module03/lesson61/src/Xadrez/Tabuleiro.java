package Xadrez;

public class Tabuleiro {
    Peca[][] tabuleiro; // Matriz que representa o tabuleiro

    // COnstructor
    public Tabuleiro() {
        this.tabuleiro = new Peca[8][8]; // Inicializa matrix 8x8 com null
        iniciarTabuleiro(); // Posiciona as peças iniciais
    }

    // Metodo para iniciar o tabuleiro na configuracao inicial
    void iniciarTabuleiro() { // void: não retorna nenhum valor
        tabuleiro[0][3] = new Rainha("Branca",0, 3);
        tabuleiro[0][4] = new Rei("Branca", 0, 4);

        tabuleiro[7][3] = new Rainha("Preta", 7, 3);
        tabuleiro[7][4] = new Rei("Preta", 7, 4);
    }

    public void exibirTabuleiro() {
        for(int i = 0; i < 8; i++) {
            for(int j = 0; j < 8; j++) {
                if(tabuleiro[i][j] != null) {
                    System.out.print(tabuleiro[i][j].getCor().charAt(0) + " "); // Captura a posicao e cor da peca e a transforma num caractere, P para pretas e B para brancas
                }
                else {
                    System.out.print(". ");
                }
            }
            System.out.println(); // A cada final de linha do tabuleiro, pula uma linha.
        }
    }

    // Metodo para mover uma peça de uma posição para outra
    public boolean moverPeca(int linhaOrigem, int colunaOrigem, int linhaDestino, int colunaDestino) {
        Peca peca = tabuleiro[linhaOrigem][colunaOrigem];
        if (peca != null && peca.mover(linhaDestino, colunaDestino)) {
            tabuleiro[linhaDestino][colunaDestino] = peca;
            tabuleiro[linhaOrigem][colunaOrigem] = null;
            return true;
        }
        return false;
    }

}
