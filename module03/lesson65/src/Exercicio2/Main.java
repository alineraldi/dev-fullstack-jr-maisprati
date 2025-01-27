package Exercicio2;

import org.w3c.dom.ls.LSOutput;

public class Main {
    public static void main(String[] args) {
        Projeto projeto1 = new Projeto("Aves de Rapina");
        Pessoa pessoa1 = new Pessoa("Aline");

        projeto1.adicionarMembro(pessoa1);

        System.out.println(projeto1.listarMembros());

    }


}
