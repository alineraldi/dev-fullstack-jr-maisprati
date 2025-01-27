package Exercicio2;
// Classe Projeto:
// Atributos: nome, membros (uma lista de objetos do tipo Pessoa).
// Métodos: adicionarMembro() e listarMembros().


import java.util.ArrayList;

public class Projeto {
    private String nome;
    private ArrayList<Pessoa> membros;

    public Projeto(String nomeProjeto) {
        this.nome = nomeProjeto;
        this.membros = new ArrayList<>();
    }

    public void adicionarMembro(Pessoa pessoa) {
        membros.add(pessoa);
    }

    public String listarMembros() {
        StringBuilder lista = new StringBuilder("Membros do projeto: " + getNome() + ":\n");
        for(Pessoa pessoa : membros) {
            lista.append("- ").append(pessoa.getNome()).append("\n");
        }

        return lista.toString();
    }

    public String getNome() {
        return nome;
    }
}

