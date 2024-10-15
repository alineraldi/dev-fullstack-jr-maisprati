// ---------------------------------------------
// 1. Spread Operator in Arrays
// ---------------------------------------------
let numbers = [1, 2, 3]

// Using the spread operator to create a new array, adding 4 and 5
let newNumbers = [...numbers, 4, 5]
console.log(newNumbers) // Output: [1, 2, 3, 4, 5]

// ---------------------------------------------
// 2. Spread Operator in Objects
// ---------------------------------------------
let person = { name: "Neymar", age: 30 }

// Using the spread to add a new property 'city' to the object
let newPerson = { ...person, city: "Santos" }
console.log(newPerson) // Output: {name: "Neymar", age: 30, city: "Santos"}

// ---------------------------------------------
// 3. Using Spread in Functions
// ---------------------------------------------
function sum(a, b, c) {
    return a + b + c
}

let numbersArray = [1, 2, 3]

// Using the spread to pass array elements as individual arguments
console.log(sum(...numbersArray)) // Output: 6

// ---------------------------------------------
// 4. Using the Rest Operator in Functions
// ---------------------------------------------
function sumAll(...numbers) {
    // Using reduce to sum all received numbers
    return numbers.reduce((total, number) => total + number)
}

// Calling the function with multiple arguments
console.log(sumAll(1, 2, 3, 4, 5)) // Output: 15

// ---------------------------------------------
// 5. Destructuring Arrays with Rest
// ---------------------------------------------
const [first, second, ...rest] = [1, 2, 3, 4, 5]

console.log(first) // Output: 1
console.log(second)  // Output: 2
console.log(rest)    // Output: [3, 4, 5]

// ---------------------------------------------
// 6. Destructuring Objects with Rest
// ---------------------------------------------
const player = { name: "Kanemann", age: 30, team: "Maior do sul" }

const { name: playerName, ...otherInfo } = player

console.log(playerName) // Output: Kanemann
console.log(otherInfo)  // Output: { age: 30, team: "Maior do sul" }