/*
3) Implemente um programa que calcule e exiba os primeiros n números da sequência de Fibonacci.
n deve ser fornecido pelo/a usuário/a.*/

package Activity8;
import java.util.Scanner;

public class Fibonacci {
    Scanner scanner = new Scanner(System.in);

    public Fibonacci() {
        fibonacciGenerator();
    }

    public void fibonacciGenerator() {
        System.out.println("Welcome to the Fibonacci generator. How many Fibonacci numbers would you like to generate?");
        int userInput = scanner.nextInt();
        int num0 = 0;
        int num1 = 1;
        System.out.println(num0 + "\n" + num1);
        for (int i = 0; i < userInput - 2; i++) {
            int newNumber = num0 + num1;
            System.out.println(newNumber);
            num0 = num1;
            num1 = newNumber;
        }
    }

    public static void main(String[] args) {
        new Fibonacci();
    }
}
