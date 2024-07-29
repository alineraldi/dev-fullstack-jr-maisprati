// How would you print a multiplication table in JS without repetition structures?
const prompt = require("prompt-sync")()

userNumber = Number(prompt("Printing a multiplication table without repetition structures. Insert a number: "))

console.log(userNumber * 1)
console.log(userNumber * 2)
console.log(userNumber * 3)
console.log(userNumber * 4)
console.log(userNumber * 5)
console.log(userNumber * 6)
console.log(userNumber * 7)
console.log(userNumber * 8)
console.log(userNumber * 9)
console.log(userNumber * 10)

//LOOP 1 - For
// Syntax: <variable>; <condition>; <increment>

console.log("Multiplication table with a For Loop")
let counter = 0
let multiplier = 7

for(counter = 0; counter <= 10; counter ++){
    console.log(`${multiplier} * ${counter} =`, multiplier * counter)
}

// Print even numbers from 1 to 20
console.log("Printing even numbers from 1 to 20...")
for(let i = 0; i <= 20; i += 2){ // I was about to write "counter" as a variable, but then realized I shouldn't repeat it, and I could create a new one inside my for loop
    console.log(i)
}

// Calculating the sum of numbers from 1 to 100.
console.log("Calculating the sum of numbers from 1 to 100...")
let sum = 0
for(let j = 0; j <= 100; j++){
    sum += 1
}

console.log(sum)

// Print numbers from 10 to 1.
console.log("Printing numbers from 10 to 1 (using a for loop)")
for(let k = 10; k >= 1; k--){
    console.log(k)
}

// LOOP 2 - WHILE - way easier!
console.log("Printing numbers from 10 to 1 (using a while loop)")
let l = 10
while(l >= 1){
    console.log(l)
    l--
}


// Exercise 1: Using a while loop, calculate numbers from 1 to 100.

let sum2 = 0
let m = 0
while(m <= 100){
    sum2 += 1
    m++
}
console.log(sum2)


// Exercise 2: Create an algorithm that receives decimal numbers until the user types "0", then calculate the arithmetic mean.

let userInput = Number(prompt("Insert decimal numbers and I'll calculate their artihmetic mean. Type 0 if you'd like to exit. "))
let loopCounter = 0
fullSum = 0

while (userInput !== 0){
    fullSum += userInput
    loopCounter++
    userInput = Number(prompt("Insert decimal numbers and I'll calculate their artihmetic mean. Type 0 if you'd like to exit. "))
}

console.log("The arithmetic mean is", fullSum / loopCounter)

// Exercise 3: Write an algorithm that asks for numbers until the user types a negative number.

userInput = 0

do {  // do while runs the code at least once
    userInput = (Number(prompt("Please write a positive number:")))
    console.log("You just wrote: ", userInput)
} while(userInput >= 0)
console.log("You typed a negative number. Goodbye.")