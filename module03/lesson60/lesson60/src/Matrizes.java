import java.util.Arrays;

public class Matrizes {
    public static void main(String[] args) {

        int[][] matriz = {
                {10, 20, 30},
                {40, 50, 60},
                {70, 80, 90}
        };

        /* Exercício 1: Somar as diagonais da matriz*/
        int sum = 0;

        for(int i = 0; i < matriz.length; i++){ /* importante: o length da matriz é o número de LINHAS, não de elementos. por isso que aqui é possível pegar as diagonais. */
            sum += matriz[i][i]; /* pega matriz[1][1], matriz[2][2], matriz [3][3] */
        }
        System.out.println("Matriz: " + Arrays.deepToString(matriz));
        System.out.println("Soma da diagonal: " + sum);

        int sumSecundaria = 0;
        for (int j = 0; j < matriz.length; j++) {
            sumSecundaria += matriz[j][matriz.length - 1 - j];
        }

        System.out.println("Soma das diagonais secundárias: " + sumSecundaria);


        /* Exercício 2: Rotacionar a matriz em 90 graus */
        int n = matriz.length;
        int[][] matrizRotacionada = new int[n][n];

        for(int k = 0; k < n; k++) {
            for(int l = 0; l < n; l++) {
                matrizRotacionada[l][n - 1 - k] = matriz[k][l];
            }
        }

        System.out.println("Matriz rotacionada: ");
        for (int k = 0; k < n; k++) {
            for (int l = 0; l < n; l++) {
                System.out.println(matrizRotacionada[k][l] + "-");
            }
        }

    }
}
