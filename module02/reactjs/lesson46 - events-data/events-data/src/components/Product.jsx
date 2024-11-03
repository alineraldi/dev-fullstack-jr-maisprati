import { useState } from "react"; // importa o hook useState, para manipular o estado do componente


function Product() { // declara função

    // I N I C I A N D O  E S T A D O S
    // inicializa estados para armazenar as informações do produto
    const [productName, setProductName] = useState(''); // armazena nome do produto
    const [price, setPrice] = useState(''); // armazena preço do produto
    const [category, setCategory] = useState('Eletronicos') // armazena a categoria do produto, com valor inicial 'Eletronicos';
    const [description, setDescription] = useState(''); // armazena descrição;
    const [products, setProducts] = useState([]); // armazena lista de produtos cadastrados
    const [error, setError] = useState(''); // armazena mensagens de erro p/ exibir
    const [categoryFilter, setCategoryFilter] = useState('Todos'); // armazena a categoria de filtro, com valor inicial 'Todos'
    const [editId, seEditId] = useState(null); // o editId armazena o ID do produto que está sendo editado, permitindo que o formulário atualize um produto existente em vez de criar um novo, e é redefinido para null após a edição ser concluída.

    // H A N D L E R S
    // Estabelecendo handlers- eles atualizarão o estado ao alterar o campo de input.
    const handleNameChange = (event) => setProductName(event.target.value); // atualiza nome do produto
    const handlePriceChange = (event) => setPrice(event.target.value); // atualiza o preço
    const handleCategoryChange = (event) => setCategory(event.target.value); // atualiza a categoria
    const handleDescriptionChange = (event) => setDescription(event.target.value); // atualiza a descrição
    

    // Handler para adicionar ou editar produto
    const handleAddProduct = (event) => {
        event.preventDefault(); // impede comportamento padrão: recarregar a pagina ao enviar o formulario

        // validação de campos obrigatórios
        if (!productName || !price || !description) {
            setError('Por favor, preencha todos os campos.'); // define mensagem de erro
            return;
        }

        if (isNaN(price) || Number(price) <= 0) { // verifica se o valor de price não é um numero (isNaN) || se é menor ou igual a zero
            setError('O preço deve ser um valor positivo.');
            return; // interrompe a  execução se houver campos vazios. 
        }

        setError(''); // limpa a mensagem de erro

        // cria um objeto para o novo produto
        const newProduct = {
            id: editId || Date.now(), // define um ID pro produto: editID se estiver sendo editado, ou a data se for novo
            name: productName, // define nome
            price: parseFloat(price).toFixed(2), // define preço como numero decimal de 2 casas
            category,
            description,
        };

        // verifica se é uma edição ou produto novo
        if (editId) {
            // products.map(...): percorre a lista products.
            setProducts(products.map((product) => (product.id === editId ? newProduct : product))); // se o id do produto atual for igual ao editId, substitui com newProduct; caso contrário, mantém o product.
            setEditId(null); // limpa o editID após a edição
        } else {
            setProducts([...products, newProduct]); // adiciona o novo produto à array de produtos
        }

        // limpa campos do form
        setDescription('');
        setPrice('');
        setProductName('');
    };

    // Handler para carregar os dados de um produto editado
    const handleEditProduct = (product) => {
        setProductName(product.name);
        setPrice(product.price);
        setCategory(product.category);
        setDescription(product.description);
        setEditId(product.id);
    }

    // Handler para remover um produto da lista
    const handleRemoveProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id)); // cria uma nova lista de produtos que não inclui o produto com a id correspondente
        if (editId === id) setEditId(null); // limpa o editID se o produto editado foi removido
    };

    // Filtra os produtos de acordo com categoria selecionada no filtro
    const filteredProducts = products.filter(
        (product) => categoryFilter === 'Todos' || product.category === categoryFilter
    );

    return (
        <div>
            <h1>Cadastro de Produto</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleAddProduct}>
                <label>
                    Nome do Produto:
                    <input type="text" value={productName} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Preço:
                    <input type="text" value={price} onChange={handlePriceChange} />
                </label>
                <br />
                <label>
                    Categoria:
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="Eletronicos">Eletronicos</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Alimentos">Alimentos</option>
                    </select>
                </label>
                <br />
                <label>
                    Descrição:
                    <textarea value={description} onChange={handleDescriptionChange} />
                </label>
                <br />

                <button type="submit">Adicionar Produto</button>
            </form>

            <h2>Filtro de Categoria</h2>
            <label>
                Filtrar por Categoria:
                <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
                    <option value="Todos">Todos</option>
                    <option value="Eletronicos">Eletronicos</option>
                    <option value="Roupas">Roupas</option>
                    <option value="Alimentos">Alimentos</option>
                </select>
            </label>

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - ${product.price} - {product.category}
                        <p>{product.description}</p>
                        <button onClick={() => handleEditProduct(product)}>Editar</button>
                        <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Product; // exporta o componente para ser usado em outros arquivod
