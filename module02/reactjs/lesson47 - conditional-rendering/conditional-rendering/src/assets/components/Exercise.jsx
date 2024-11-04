// Exercício: Simulador de Mudança de Cores Automática
// Objetivo: Criar um componente que muda a cor do plano de fundo a cada 2 segundos usando o useEffect. 
// A cor deve ser escolhida aleatoriamente, e o usuário deve poder iniciar e parar essa mudança de cores com um botão.

import { useState, useEffect } from "react";

function Exercise() {
    const [color, setColor] = useState('#000000')
    const [activeInterval, setActiveInterval] = useState(false)

    const randomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    useEffect(() => {
        const intervalId = activeInterval? setInterval(() => {
                setColor(randomColor());
            }, 2000)
            : null;

        return () => clearInterval(intervalId);
    }, [activeInterval]);

    const toggleInterval = () => {
        setActiveInterval(!activeInterval)
    };

    return (
        <div style={{backgroundColor: color}}>
            <button onClick={toggleInterval}>
                {activeInterval ? 'Parar' : 'Iniciar'}
            </button>
        </div>
    )
}

export default Exercise