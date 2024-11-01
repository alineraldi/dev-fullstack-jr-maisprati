import React, {useState, useEffect, Component } from 'react'; // Importa a biblioteca react

    class Counter extends Component {
        constructor(props) {
            super(props)
            this.state = { count: 0 }
        }

        componentDidMount() {
            console.log("Componente montado!")
        }

        componentDidUpdate(prevProps, prevState) {
            console.log("Componente atualizado! Propriedade e estados anteriores: " + prevProps, prevState)
            if (this.state.count % 5 === 0 && this.state.count !== prevState.count) {
                alert("Esse número é múltiplo de 5!")
            }
        }

        componentWillUnmount() {
            console.log("Componente será desmontado.")
        }

        render() {
            return(
                <div>
                <p>Counter: {this.state.count}</p>

                <button onClick={() => {
                    if (this.state.count < 10) {
                        this.setState({ count: this.state.count + 1 });
                    }
                }}>Increment</button>
                <button onClick={() => {
                    if (this.state.count > 0) {
                    this.setState({ count: this.state.count - 1 });
                    }
                }}>Decrement</button>
                <button onClick={() => this.setState({ count: 0 })}>Reset</button>
                </div>
            )
        }
    }

/* Functional Component

function Counter() { // declara o componente funcional chamado Counter
    const [count, setCount] = useState(0); // usa o useState hook para inicializar a variável count com valor inicial a 0. setCount é uma função para atualizar o estado do contador.

    useEffect(() => {
        console.log("Componente montado!")

        return () => {console.log("Componente será desmontado!")}
    }, [])

    useEffect(() => {
        console.log("Componente atualizado!")
    }, [])

    return (
        <div>
            <p>Counter: {count}</p>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
} */



export default Counter; // exporta o componente Counter como exportação padrão, o que faz com que seja possível usá-lo em outras partes do app