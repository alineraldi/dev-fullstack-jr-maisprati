import { createContext, useState, useContext } from "react"; 
// Importa as funções `createContext`, `useState`, e `useContext` do React. 
// `createContext` é usado para criar um contexto, `useState` para criar estados locais, 
// e `useContext` para acessar o contexto em outros componentes.

export const ThemeContext = createContext(); 
// Cria o contexto chamado `ThemeContext`. 
// Esse contexto serve como um "container" para dados que queremos compartilhar entre componentes. 
// Usamos `export` para permitir que ele seja importado em outros arquivos.

export const ThemeProvider = ({ children }) => { 
// Cria o componente `ThemeProvider`, que será responsável por fornecer o contexto aos componentes filhos.
// `children` representa os componentes que serão envolvidos por `ThemeProvider`.

    const [theme, setTheme] = useState('light'); 
    // Cria um estado chamado `theme`, inicializado como 'light'. 
    // `setTheme` é a função que permite alterar o valor do `theme`.

    const toggleTheme = () => { 
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); 
    }; 
    // Define a função `toggleTheme`, que alterna o valor do `theme` entre 'light' e 'dark'.
    // `prevTheme` representa o valor atual de `theme`. Se for 'light', muda para 'dark', e vice-versa.

    return ( 
        <ThemeContext.Provider value={{ theme, toggleTheme }}> 
        // Retorna o `ThemeContext.Provider`, que fornece o valor do contexto (`theme` e `toggleTheme`)
        // para os componentes filhos que estão dentro dele.

            {children} 
            // Renderiza os componentes filhos passados para `ThemeProvider`,
            // permitindo que eles acessem o `theme` e `toggleTheme` via `ThemeContext`.

        </ThemeContext.Provider>
    );
};
