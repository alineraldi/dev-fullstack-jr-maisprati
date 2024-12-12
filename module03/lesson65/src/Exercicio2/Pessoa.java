package Exercicio2;

import java.util.ArrayList;

// Classe Pessoa:
// Atributos: nome, projetos (uma lista de objetos do tipo Projeto).
// Métodos: adicionarProjeto().
public class Pessoa {
    String nome;
    ArrayList<Projeto> projetos = new ArrayList<>();

    public Pessoa(String nome) {
        this.nome = nome;
    }

    public void adicionarProjeto(Projeto projeto) { // o argumento é o dado que vou manipular
        projetos.add(projeto);
        projeto.adicionarMembro(this);
    }

    public String getNome() {
        return nome;
    }
}
