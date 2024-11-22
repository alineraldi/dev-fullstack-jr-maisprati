// Você está desenvolvendo uma aplicação de e-commerce que precisa exibir uma lista de produtos disponíveis em estoque. O objetivo deste exercício é implementar a renderização condicional para exibir apenas os produtos que estão disponíveis (ou seja, aqueles que possuem a propriedade inStock como true).

// Desafio Extra (opcional):

// Adicione um botão que permita alternar entre exibir todos os produtos e apenas os produtos em estoque.

import { useState } from 'react'

function Products() {
    const [showOnlyInStock, setShowOnlyInStock] = useState(false)
    const products = [
        { id: 1, name: 'Watercolor Pencil', inStock: true },
        { id: 2, name: 'Kneadable Eraser', inStock: false },
        { id: 3, name: 'Watercolor Paper', inStock: true },
        { id: 4, name: 'Oil Pastels kit', inStock: false }
    ];

    return (
        <div>
            <button onClick={() => setShowOnlyInStock(!showOnlyInStock)}>
                {showOnlyInStock ? "Mostrar todos" : "Mostrar apenas em estoque"}
            </button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} {showOnlyInStock && !product.inStock ? '(Indisponível)' : ""}
                    </li>   
            ))}
            </ul>
        </div>
    )
}

export default Products