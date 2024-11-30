import java.util.Arrays;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class ManipulacaoDeArraysUnidimensionais {
    public static void main(String[] args) {
        /* Exercício 1: Soma de Elementos de um Array */

        int[] vetor = new int[5];

        vetor[0] = 10;
        vetor[1] = 11;
        vetor[2] = 12;
        vetor[3] = 13;
        vetor[4] = 14;
        int sum = 0;
        for(int j = 0; j < vetor.length; j++){
            sum += vetor[j];
        }

        System.out.println("A soma de valor do vetor[" + String.join(", ", Arrays.toString(vetor)) + "] é: " + sum);

        /* Exercício 2: Reverter a ordem de um array */
        int start = 0;
        int end = vetor.length - 1;

        while(start < end) {
            int temp = vetor[start];

            vetor[start] = vetor[end];

            vetor[end] = temp;

            start++;
            end--;
        }

        System.out.println("Vetor invertido: ");
        for (int k = 0; k < vetor.length; k++){
            System.out.println("Elemento na posição: " + k + ": " + vetor[k]);
        };

        /* Exercício 3: Adicionar um elemento a um Array */

        int[] numeros = {2, 3, 4};
        int novoNumero = 5;

        int[] novoNumeros = new int[numeros.length + 1];

        for(int l = 0; l < numeros.length; l++) {
            novoNumeros[l] = numeros[l];
        }

            novoNumeros[numeros.length] = novoNumero;

            numeros = novoNumeros;

        System.out.println("Array com novo elemento: " + Arrays.toString(novoNumeros));

        /* Exercício 4: Remover o elemento de um Array */

        int[] arrayMenor = new int [novoNumeros.length - 1];
        int numeroRemovido = 2;
        int index = 0;

        for(int m = 0; m < novoNumeros.length; m++){
            if(novoNumeros[m] != numeroRemovido){
                arrayMenor[index] = novoNumeros[m];
                index++;
            }
        }

        System.out.println("Array completa: " + Arrays.toString(novoNumeros));
        System.out.println("Número a remover: ");
        System.out.println("Processando...");
        System.out.println("Array modificado: " + Arrays.toString(arrayMenor));


    }
}