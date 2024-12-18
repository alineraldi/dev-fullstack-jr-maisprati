/*
* 4) Crie um programa que leia um número inteiro e exiba o número invertido.
* Exemplo: se o usuário digitar 1234, o programa deve exibir 4321. */

package Activity8;
import java.util.Scanner;

public class ReversedNumber {
    Scanner scanner = new Scanner(System.in);

    public ReversedNumber() {
        reverseNumber();
    }

    public void reverseNumber() {
        System.out.println("Hello there. Type a number and I'll reverse it for you: ");
        int userInput = scanner.nextInt();
        int reversed = 0;
        while (userInput != 0) {
            int digit = userInput % 10;
            reversed = reversed * 10 + digit;
            userInput = userInput / 10;
        }
        System.out.println("Reversed number: " + reversed);
    }

    public static void main(String[] args) {
        new ReversedNumber();
    }
}
