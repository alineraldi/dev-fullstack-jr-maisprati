package Xadrez; /* Define o pacote Xadrez, organizando a classe dentro desse pacote. */

abstract class Peca { /* Declara a classe Peca como abstrata. Isso significa que ela não pode ser instanciada diretamente e pode conter métodos abstratos (que precisam ser implementados pelas subclasses). */
    String cor;
    int linha;
    int coluna;

    public Peca(String cor, int linha, int coluna) { /* Construtor da classe Peca. */
        /* Atribui os valores recebidos pelos parâmetros (cor, linha, coluna) aos atributos correspondentes da classe (this.cor, this.linha, this.coluna)*/
        this.cor = cor;
        this.linha = linha;
        this.coluna = coluna;
    }

    public String getCor() { /* Esse metodo é usado para acessar o valor da cor da peça sem acessar o atributo diretamente. */
        return cor;
    }

    public abstract boolean mover(int novaLinha, int novaColuna);
    /* Declara o metodo abstrato mover, que recebe como parametros:
    novaLinha: a nova posição vertical para a qual a peça deve ser movida.
    novaColuna: a nova posição horizontal para a qual a peça deve ser movida.
    Por ser abstrato, não tem implementação na classe Peca. Subclasses devem implementar esse metodo para definir como cada tipo de peça se move no tabuleiro.
    O retorno do metodo é boolean, indicando se o movimento é válido (true) ou inválido (false). */
}
