// Relational Operators

console.log(10 > 5) // true
console.log(10 < 5) // false
console.log(10 <= 5) // false
console.log(10 >= 5) // true
console.log(10 == 5) // false 
console.log(10 == "10") //true
console.log(10 === "10") // false
console.log(10 != '10') // false
console.log(10 !== "10") // true

// Logic Operators

console.log((10 < 5) && (10 > 2)) // false - uma expressão não é verdadeira
console.log((10 > 5) || (10 < 2)) // true - uma das expressões é verdadeora
console.log((10 > 5) || !(10 < 2)) // true - ! é negação
console.log(!(10 > 5) || (10 < 2)) // false - ambas negativas
 

// 1st Exercise

let user = "Aline"
let password = 1234
let authentication = user === "Pablo" && password === 1234

console.log(authentication)

authentication = user === "Aline" && password === 1234

console.log(authentication)

// Control Structures: Conditionals

// Simple

const grade = 4

if(grade >= 60){
    console.log("Aprovado!")
}

if(grade >= 60){
    console.log("Aprovado!")
} else{
    console.log("Reprovado")
}

// 2nd Exercise: Test someone's age. If the person's over 18 y/o and under 32 y/o say this person's able to take a civil service examination. Otherwise, say they're not able to do so.

const age = 27

if((age >= 18) && (age <= 32)){
    console.log("You can take a civil service examination. Way to go!")
} else{
    console.log("Unfortunately, due to an age limit, you're not able to take a civil service examination.")
}

// <Condition> ? <verdadeiro> : <falso> 

let ternaryResult = (18 >= age <= 32) ? "You can take a civil service examination. Way to go!" : "Unfortunately, due to an age limit, you're not able to take a civil service examination."
console.log(ternaryResult)

// 3rd Exercise: Verify if a number's Odd or Even
// Description: Write a program that asks the user to type a number and verifies if it's an even or odd number.

let userNumber = 50
if(userNumber % 2 == 0){
    console.log(userNumber, "is an even number.")
} else{
    console.log(userNumber, "is an odd number.")
}

// 4th Exercise: Comparing three numbers
// Description: Write a program that receives three numbers and determine which one's bigger.

let firstNumber = 15
let secondNumber = 3
let thirdNumber = 5

if((firstNumber > secondNumber) && (firstNumber > thirdNumber)){
    console.log(firstNumber, "is bigger than", secondNumber, "and", thirdNumber)
} if((secondNumber > firstNumber) && (secondNumber > thirdNumber)){
    console.log(secondNumber, "is bigger than", firstNumber, "and", thirdNumber)
} if((thirdNumber > firstNumber) && (thirdNumber > secondNumber)){
    console.log(thirdNumber, "is bigger than", firstNumber, "and", secondNumber)
}

// 5th Exercise: Simple Calculator
// Description: Write a program that implements a simple calculator with adding, subtracting, multiplicating and dividing features.

let num1 = 20
let num2 = 50
let operacao = "Dividing"

if (operacao == "Adding"){
    resultado = num1 + num2
    console.log("The result of", num1, "+", num2, "is", resultado)
}if (operacao == "Subtracting"){
    resultado = num1 - num2
    console.log("The result of", num1, "-", num2, "is", resultado)
}if (operacao == "Multiplying"){
    resultado = num1 * num2
    console.log("The result of", num1, "x", num2, "is", resultado)
}if (operacao == "Dividing"){
    resultado = num1 / num2
    console.log("The result of", num1, "/", num2, "is", resultado)
}


//

const prompt = require("prompt-sync")()

let number1 = Number(prompt("Insert a value: "))
let number2 = Number(prompt("Insert another value: "))
let operation = prompt("Insert the operation (+, -, /, *): ")
let result = 0

if(operation === "+"){
    result = number1 + number2
} else if(operation === "-"){
    result = number1 - number2
} else if(operation === "/"){
    if (number2 !== 0){
        result = number1 / number2
    } else{
        console.log("Error: divided by zero!")
        result = undefined
    }
} else if(operation === "*"){
    result = number1 * number2
} else{
    console.log("Error")
    result = undefined
}

if(result !== undefined){
    console.log("Result: ", result)
}

// Switch-Case example

let option = 1

switch(option){
    case 1:
        console.log("You've selected the first option")
        break
    case 2:
        console.log("You've selected the second option")
        break
    default:
        console.log("You haven't selected any of the options")
        break
}

// 6th Exercise: Verify how many days a particular month has


let numeroDigitado = Number(prompt("Type a month number (From 1 to 12) and I'll tell you how many days it has: "))

switch(numeroDigitado){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("This month has 31 days.")
        break
    case 2:
        console.log("This month has 28 or 29 days.")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("This month has 30 days.")
        break
    default:
        console.log("You haven't selected a valid option.")
        break
    
}


// 7th Exercise: Rewrite the Simple Calculator you've created and use the switch option instead of if.
// Description: Write a program that implements a simple calculator with adding, subtracting, multiplicating and dividing features.

let firstValue = Number(prompt("Write the first value: "))
let secondValue = Number(prompt("Write the second value: "))
let operator = Number(prompt("Now, select the operator to calculate the values. + (1), - (2), * (3), / (4)"))

switch(operator){
    case 1:
        result = firstValue + secondValue
        console.log(firstValue, "+", secondValue, "=", result)
        break
    case 2:
        result = firstValue - secondValue
        console.log(firstValue, "-", secondValue, "=", result)
        break
    case 3:
        result = firstValue * secondValue
        console.log(firstValue, "*", secondValue, "=", result)
        break
    case 4:
        result = firstValue / secondValue
        console.log(firstValue, "/", secondValue, "=", result)
        break
    default:
        console.log("Error!")
        break
}
