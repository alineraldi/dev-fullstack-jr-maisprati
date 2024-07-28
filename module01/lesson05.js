// mensagem inicial

console.log("Hello, world")

// tipos de dados em Js: String, number, boolean, undefined e null

// demonstração - undefined
let test
console.log(test)

// atribuindo valor à variável declarada, mas não iniciada (undefined)
test = "teste"
 console.log(test)

// demonstração - null
let MyNull = null
console.log(MyNull) 

// operadores

let num1 = 10
let num2 = 5

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)
console.log(num1 ** num2)
console.log(num1 % num2) // restante - módulo]

// incremento
let counter = 1
console.log("Contador: ", counter)
counter ++
console.log("Contador: ", counter)

// decremento
counter = 1
console.log("Contador: ", counter)
counter--
console.log("Contador: ", counter)

// e se quero contar de 2 em 2? adiciono o valor a uma variável
let step = 2
counter += step
console.log(counter)
counter *= step
console.log(counter)