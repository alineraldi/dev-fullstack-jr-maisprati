import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext() // primeiro se cria um contexto: nesse caso, um objeto que armazena dados que gostaríamos que fosse compartilhado entre mais de um componente

export const ThemeProvider = ({ children }) => { // responsável por compartilhar esses dados com os componentes, os filhos
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}