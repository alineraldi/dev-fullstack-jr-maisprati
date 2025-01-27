/*
7) Escreva um programa que
leia uma frase e conte o número de palavras nela. Considere que as
palavras estão separadas por espaços em branco.
 */

package Activity8;
import java.util.Scanner;

public class WordCounter {

    public WordCounter() {
        wordCounter();
    }

    public void wordCounter() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please, type a sentence and I'll count how many words it has: ");
        String fullSentence = scanner.nextLine();
        String[] words = fullSentence.split("\\s+");
        System.out.println("The sentence `" + fullSentence + "` has " + words.length + " words." );
    }

    public static void main(String[] args) {
        new WordCounter();
    }
}
