/*
Crie um programa que leia uma palavra e verifique se ela é um palíndromo
(se pode ser lida da mesma forma de trás para frente).
Ignore
diferenças entre maiúsculas e minúsculas.
*/

package Activity8;
import java.util.Scanner;

public class IsItAPalindrome {
    Scanner scanner = new Scanner(System.in);

    public IsItAPalindrome() {
        palindromeChecker();
    }

    public void palindromeChecker() {
        System.out.println("Welcome to the Palindrome Checker. \nType a word and I'll verify if it's a palindrome or not: ");
        String userInput = scanner.nextLine().toLowerCase();
        String reversedInput = "";
        for(int i = userInput.length() - 1; i >= 0; i--) {
            reversedInput += userInput.charAt(i);
        }
        if(userInput.equals(reversedInput)) {
            System.out.println(userInput + " is a palindrome!");
        } else {
            System.out.println(userInput + " is not a palindrome.");
        }
    }

    public static void main(String[] args) {
        new IsItAPalindrome();
    }
}
