/* Conceitos básicos do Java: Variáveis e Tipos de dados, Estruturas de Controle e Reposição */
import java.util.Scanner;

public class Main {
    static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {
    byte idade = 24;
    short ano = 2024;
    int populacao = 100000;
    long conta_bancaria = 384_400L;

    float preco = 19.99f;
    double saldo = 12345.67;

    char letraInicial = 'J';

    boolean estaCalor = true;
    String texto = "Olá, turma!";

    System.out.println("Idade: " + idade);
    System.out.println("Ano: " + ano);
    System.out.println("O professor é \"Gaúcho\"");
    System.out.printf("Preço: %.2f\n", preco);
    int a, b, c;
    double area;
        a = 2;
        b = 20;
        c = 40;
        area = (double) (a+b)/2 * c;

        System.out.println(area);

        /* Exercício: Conversão de Celsius para Fahrenheit */

        float celsius = 5.00f;
        float fahrenheit;

        fahrenheit = (float) celsius * 33.8f;
        System.out.println(celsius + "ºC é " + fahrenheit + "ºF.");

        /* Exercício 2: Verificar se um número é par ou ímpar */

        int numero = 5;

        if(numero % 2 == 0){
            System.out.println("O número " + numero + " é par.");
        } else {
            System.out.println("O número " + numero + " é ímpar.");
        }

        /* Exercício 3: Solicite ao usuário digitar o número do dia da semana e retorne o respectivo dia. */
        System.out.println("Digite um número de 1 a 7 e lhe direi o respectivo dia da semana: ");
        int dia = scanner.nextInt();

        switch(dia) {
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda");
                break;
            case 3:
                System.out.println("Terça");
                break;
            case 4:
                System.out.println("Quarta");
                break;
            case 5:
                System.out.println("Quinta");
                break;
            case 6:
                System.out.println("Sexta");
                break;
            case 7:
                System.out.println("Sábado");
                break;
            default:
                System.out.println("Insira uma opção válida.");
        }

        /* Exercício 4: Verificar se um ano é bissexto */

        System.out.println("Insira um ano e verificarei se ele é bissexto: ");
        int possivel_bissexto = scanner.nextInt();
        if((possivel_bissexto % 4 == 0) && (possivel_bissexto % 100 != 0) || (possivel_bissexto % 400 == 0) && (possivel_bissexto % 100 == 0)){
            System.out.println("O ano " + possivel_bissexto + " é bissexto.");
        } else {
            System.out.println("O ano " + possivel_bissexto + " não é bissexto.");
        }

        /* Exercício 5: Calculadora Simples */

        System.out.println("\nBem vindo à calculadora simples! Tudo bem?");
        System.out.println("Digite o primeiro número a ser calculado: ");
        int num1 = scanner.nextInt();
        System.out.println("Certo. Agora digite o outro número: ");
        int num2 = scanner.nextInt();
        System.out.println("Agora, digite a operação desejada: \n + - * /");
        char operacao = scanner.next().charAt(0);
        scanner.nextLine();

        switch(operacao) {
            case '+' :
                int resultadoAdicao = num1 + num2;
                System.out.println(num1 + "+" + num2 + "=" + resultadoAdicao );
                break;
            case '-' :
                int resultadoSubtracao = num1 - num2;
                System.out.println(num1 + "-" + num2 + "=" + resultadoSubtracao );
                break;
            case '*' :
                int resultadoMult = num1 * num2;
                System.out.println(num1 + "*" + num2 + "=" + resultadoMult );
                break;
            case '/' :
                int resultadoDivisao = num1 / num2;
                System.out.println(num1 + "/" + num2 + "=" + resultadoDivisao );
                break;
            default:
                System.out.println("Operação inválida.");
        }

        /* Exercício 6: Login page */

        String username = "alineraldi";
        String password = "senha123";
        boolean success = false;

        while (!success) {
            System.out.println("Sign in page");
            System.out.println("Nome de usuário: ");
            String usernameInput = scanner.nextLine();
            System.out.println("Senha: ");
            String passwordInput = scanner.nextLine();

            if((usernameInput.equalsIgnoreCase(username)) && (passwordInput.equals(password))) {
                System.out.println("Seja bem vinda/o, " + username + "!");
                success = true;
            } else {
                System.out.println("Username e/ou senha inválidos. Tente novamente.");
            }

        }

        /* Exercício 7: Imprimir números de 1 a 10 com For, While e Do While */
        byte i;
        for(i=1; i<11; i++){
            System.out.println(i);
        }

        i = 1;
        while(i < 11) {
            System.out.println(i);
            i++;
        }
        i = 1;
        do {
            System.out.println(i);
            i++;
        } while (i < 11);

        /* Manipulação de strings */

        String textoJava = "Java é uma excelente linguagem de porgramação!";

        int comprimento = textoJava.length();
        String maiusculas = textoJava.toUpperCase();
        String minusculas = textoJava.toLowerCase();
        System.out.println(comprimento);
        System.out.println(maiusculas);
        System.out.println(minusculas);

        boolean contain = textoJava.contains("Java");
        System.out.println(contain);

        String substitute = textoJava.replace("Java", "Python");
        System.out.println(substitute);

        String substring = textoJava.substring(0, 4);
        System.out.println(substring);

        double num = 20.60;
        double arrendondar = Math.round(num);
        double arredondarPraCima = Math.ceil(arrendondar);
        Math.floor(arrendondar);
        Math.sqrt(90);
        Math.abs(num);
        Math.random;

        /* Arrays */
        int[] vetor = new int[5];

        vetor[0] = 5;
        vetor[1] = 1;
        vetor[2] = 210;
        vetor[3] = 3;
        vetor[4] = 4;

        for(int j = 0; j < vetor.length; j++) {
            System.out.println("Elemento na posição: " + j + ":" + vetor[j]);
        }

        /* Exercício 7: Encontrar o valor máximo de um array */

        int valorMaximo = 0;
        int posicaoMaximo = 0;
        for(int j = 0; j < vetor.length; j++) {
            if(vetor[j] > valorMaximo){
                valorMaximo = vetor[j];
                posicaoMaximo = j;
            }
        }

        System.out.println("O valor máximo é " + valorMaximo + " e está na posição " + posicaoMaximo);





        scanner.close();

    }
}