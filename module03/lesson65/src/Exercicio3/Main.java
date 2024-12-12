package Exercicio3;

public class Main {
    public static void main(String[] args) {
        Disciplina quimica = new Disciplina("Química");
        Professor professor = new Professor("Álvaro");
        professor.adicionarDisciplina(quimica);

        Departamento exatas = new Departamento("Departamento de Ciências Exatas");
        exatas.adicionarProfessor(professor);

        Universidade minhaUniversiade = new Universidade("UFRJ");
        minhaUniversiade.adicionarDepartamentos(exatas);

        System.out.println(minhaUniversiade);
    }

}
