import React from 'react'; // importa a biblioteca react
import Counter from './Counter' // importa o componente funcional Counter

function App() { // define um componente funcional chamado App
  return ( // renderiza o componente Counter
    <div className="App">
      <Counter />
    </div>
  )
}

export default App // exporta o App componente