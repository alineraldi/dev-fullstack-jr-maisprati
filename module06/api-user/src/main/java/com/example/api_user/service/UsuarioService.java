package com.example.api_user.service; // Define o pacote onde a classe UsuarioService está localizada. Isso é útil para organizar o código e torná-lo mais fácil de gerenciar.
import com.example.api_user.model.Usuario; // Importa o modelo Usuario
import org.springframework.stereotype.Service; // Importa a anotação @Service do Spring. Essa anotação indica que a classe UsuarioService é um serviço. No contexto do Spring, um serviço é uma classe que contém lógica de negócios.

// Importa as classes ArrayList e List do pacote java.util.
import java.util.ArrayList;
import java.util.List;

@Service // Define a classe UsuarioService e a torna um serviço Spring ao usar a anotação @Service
public class UsuarioService {
    private List<Usuario> usuarios = new ArrayList<>(); // Cria uma variável de instância usuarios, que é uma lista de objetos Usuario. Ela é inicializada como um novo ArrayList, o que significa que, por padrão, a lista começa vazia. Essa lista armazenará todos os usuários criados.

    public List<Usuario> listarUsuarios() { // Define o metodo listarUsuarios(). Esse metodo retorna a lista de usuários armazenada em usuarios. Não há filtros ou lógicas adicionais; ele simplesmente retorna a lista completa.
        return this.usuarios;
    }

    public Usuario criarUsuario (Usuario usuario) { // Define o metodo criarUsuario(Usuario usuario), que recebe um objeto Usuario como parâmetro.
        usuario.setId((long) (usuarios.size() + 1)); // A linha usuario.setId((long) (usuarios.size() + 1)); atribui um ID único ao usuário. O ID é baseado no tamanho da lista usuarios (adicionando 1 ao número de usuários já existentes).
        usuarios.add(usuario); // A linha usuarios.add(usuario); adiciona o usuário à lista de usuários.
        return usuario; // Finalmente, o metodo retorna o objeto usuario com o ID atribuído e agora presente na lista.
    }
}
