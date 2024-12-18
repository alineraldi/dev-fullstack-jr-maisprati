/*
5) Escreva um programa
que receba duas palavras e determine se elas são anagramas (se possuem
as mesmas letras, mas em ordem diferente). Exemplo: "amor" e "roma".
*/

package Activity8;
import java.util.Scanner;
import java.util.Arrays;

public class Anagram {
    Scanner scanner = new Scanner(System.in);

    public Anagram() {
       anagramChecker();
    }

    public void anagramChecker() {
        System.out.println("Hello, welcome to the Anagram Checker. \n\nHere, you type two words and I check if they're anagrams.");
        System.out.println("Insert the first word: ");
        String word1 = scanner.nextLine().toLowerCase();
        System.out.println("Now, insert the second word: ");
        String word2 = scanner.nextLine().toLowerCase();

        if(word1.length() != word2.length()) {
            System.out.println(word1 + " and " + word2 + " are not anagrams.");
        } else {
            char[] arrayWord1 = word1.toCharArray();
            char[] arrayWord2 = word2.toCharArray();
            Arrays.sort(arrayWord1);
            Arrays.sort(arrayWord2);
            if(Arrays.equals(arrayWord1, arrayWord2)) { // Here I'm using 'equals' because using == in java verifies if they're the same Object, not if they have the same content.
                System.out.println(word1 + " and " + word2 + " are anagrams!");
            }
        }
    }

    public static void main(String[] args) {
        new Anagram();
    }
}
