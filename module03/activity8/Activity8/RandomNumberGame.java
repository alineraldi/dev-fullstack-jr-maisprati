/*
6) Crie um
jogo em que o programa escolhe um número entre 1 e 50, e o/a usuário/a
deve adivinhar. O programa informa apenas se o palpite está certo ou
errado. O jogo termina quando o número é adivinhado.
* */

package Activity8;
import java.util.Random;
import java.util.Scanner;

public class RandomNumberGame {

    public RandomNumberGame() {
        randomNumberGame();
    }

    public void randomNumberGame() {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int randomNumber = random.nextInt(50) + 1;
        boolean correctGuess = false;

        System.out.println(":: The Random Number Game ::");
        while(!correctGuess) {
            System.out.println("Guess the number I'm thinking... (from 1 to 50)");
            int userGuess = scanner.nextInt();

            if(userGuess < 0) {
                System.out.println("Please, insert a valid number.");
            }
            else if (userGuess > 50) {
                System.out.println("Please, insert a valid number.");
            } else {
                if (userGuess == randomNumber) {
                    System.out.println("You guessed it: " + userGuess + "'s the number!");
                    correctGuess = true;
                } else {
                    System.out.println("Try again.");
                }
            }
        }
    }

    public static void main(String[] args) {
        new RandomNumberGame();
    }
}
