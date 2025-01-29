package com.example.api_user.service; // Define o pacote onde a classe UsuarioService está localizada. Isso é útil para organizar o código e torná-lo mais fácil de gerenciar.
import com.example.api_user.model.Profile;
import com.example.api_user.model.Usuario; // Importa o modelo Usuario
import com.example.api_user.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; // Importa a anotação @Service do Spring. Essa anotação indica que a classe UsuarioService é um serviço. No contexto do Spring, um serviço é uma classe que contém lógica de negócios.

// Importa as classes ArrayList e List do pacote java.util.
import java.util.ArrayList;
import java.util.List;

@Service // Define a classe UsuarioService e a torna um serviço Spring ao usar a anotação @Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario criarUsuarioComPerfil(String nome, String bio){
        Profile profile = new Profile();
        profile.setBio(bio);

        Usuario usuario = new Usuario();
        usuario.setNome(nome);
        usuario.setProfile(profile);

        return usuarioRepository.save(usuario);
    }

}
