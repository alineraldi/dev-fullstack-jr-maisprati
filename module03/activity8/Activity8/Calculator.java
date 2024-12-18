/*
1) Escreva um programa que peça dois números e um operador (+, -, *, /).
Realize a operação indicada e exiba o resultado.
*/

package Activity8;
import java.util.Scanner;

public class Calculator {
    Scanner scanner = new Scanner(System.in);

    public Calculator() {
        showCalculator();
    }


    public void showCalculator() {
        double result = 0;
        System.out.println("Welcome to the Simple Calculator! \nPlease, insert the first number you'd like to calculate: ");
        double num1 = scanner.nextDouble();
        System.out.println("Now, please insert the second number: ");
        double num2 = scanner.nextDouble();

        System.out.println("Which mathematical operation would you like to perform? (Choose: +, -, *, /)");
        String option = scanner.next();

        switch (option) {
            case "+":
                result = num1 + num2;
                System.out.println(num1 + " + " + num2 + " = " + result);
                break;
            case "-":
                result = num1 - num2;
                System.out.println(num1 + " - " + num2 + " = " + result);
                break;
            case "*":
                result = num1 * num2;
                System.out.println(num1 + " * " + num2 + " = " + result);
                break;
            case "/":
                if(num2 == 0) {
                    System.out.println("Error: Division by zero");
                    break;
                } else {
                    result = num1 / num2;
                    System.out.println(num1 + " / " + num2 + " = " + result);
                    break;
                }
            default:
                System.out.println("Invalid operator!");
        }
    }

    public static void main(String[] args) {
        new Calculator();
    }
}
