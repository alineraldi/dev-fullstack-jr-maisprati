// Exemplo de desestruturação de arrays
let numeros = [10, 20, 41]

// Desestrutura o array 'numeros', pegando o primeiro e o terceiro elemento
const [primeiro, , terceiro] = numeros

// Exibe o primeiro elemento do array
console.log(primeiro)  // Saída: 10
// O segundo elemento foi ignorado com a vírgula

// Exibe o terceiro elemento do array
console.log(terceiro)  // Saída: 41


// Exemplo de desestruturação de objetos
let pessoa = {
    nome: 'Geromel',
    idade: 39,
    profissao: 'Cão de guarda'
}

// Desestrutura o objeto 'pessoa', extraindo as propriedades 'nome', 'idade' e 'profissao'
const {nome, idade, profissao} = pessoa

// Exibe as propriedades extraídas
console.log(nome)       // Saída: Geromel
console.log(idade)      // Saída: 39
console.log(profissao)  // Saída: Cão de guarda

// Desestruturação com renomeação de variáveis e valor padrão para 'cidade'
const {nome: nomePessoa, idade: anos, cidade = 'Rio de Janeiro'} = pessoa

// Exibe os valores renomeados
console.log(nomePessoa)  // Saída: Geromel
console.log(anos)        // Saída: 39
console.log(cidade)      // Saída: Rio de Janeiro (valor padrão, já que 'cidade' não está presente no objeto 'pessoa')
console.log(pessoa)      // Exibe o objeto original 'pessoa'


// Desestruturação de arrays com atribuição para múltiplas variáveis
// Com base nesse array
numeros = [10, 20, 30, 40, 50, 60]

// Usa a desestruturação para atribuir os valores dos três primeiros elementos para as variáveis 'a', 'b' e 'c'
const [a, b, c] = numeros
console.log(a)
console.log(b)
console.log(c)

// Exemplo de desestruturação de objeto aninhado
const desenvolvedor = {
    nomeDev: 'Jaques',
    idadeDev: 24,
    contatoDev: {
      emailDev: 'jaques.dev@example.com',
      enderecoDev: {
        cidadeDev: 'Porto Alegre',
        estadoDev: 'RS',
        paisDev: 'Brasil'
      }
    },
    projetos: ['Website', 'App Mobile', 'API']
}

// 1. Desestruturando 'nome' e 'idade' diretamente do objeto 'desenvolvedor'
const {nomeDev, idadeDev} = desenvolvedor
console.log(nomeDev)
console.log(idadeDev)

// 2. Extraindo o 'email' da propriedade 'contato'
const { contatoDev: { emailDev } } = desenvolvedor
console.log({ emailDev })

// 3. Extraindo 'cidade', 'estado' e 'pais' do objeto aninhado 'endereco'
const { contatoDev: { enderecoDev: {cidadeDev, estadoDev, paísDev}}} = desenvolvedor
console.log({cidadeDev})

// 4. Extraindo o primeiro e o segundo projeto da lista de 'projetos'
const {projetos: [obj1, obj2]} = desenvolvedor
console.log(obj1)
console.log(obj2)