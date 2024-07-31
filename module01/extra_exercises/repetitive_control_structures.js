/* FOR LOOPS 

1 - Print the Fibonacci sequence up to the 10th term

Write a program that uses a for loop to print the first 10 terms of the Fibonacci sequence. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)

Tip: The Fibonacci sequence is calculated by adding the two previous terms to get the next term. */

let num1 = 0
let num2 = 1

console.log(num1)
console.log(num2)

for (i = 2; i < 10; i++){
    let nextTerm = num1 + num2
    console.log(nextTerm)
    num1 = num2
    num2 = nextTerm
}

/* 2 - Check if a number is prime
Write a program that uses a for loop to check if a given number (for example, 29) is prime. Print "Is prime" or "Is not prime."

Tip: A prime number is only divisible by 1 and itself. */


for (let isitPrime = 0; isitPrime <= 50; isitPrime++){
    let isPrime = true
    if (isitPrime <= 1){
        isPrime = false
    } if(isitPrime > 1){
        for(let i = 2; i < isitPrime; i++){
            if(isitPrime % i === 0){
                isPrime = false
                break
            }
        }
    }
    if (isPrime === true){
        console.log(isitPrime, "is a prime number.")
    } else{
        console.log(isitPrime, "is not a prime number.")
    }
}

/* 3 - Print a Number Triangle

Write a program that uses a for loop to print a number triangle.

Tip: Use two for loops, one inside the other. */

letter = "A"
additionalLetter = "A"

for (let j=0; j <= 5; j++){
    console.log(letter)
    letter = letter + additionalLetter
}

/* WHILE LOOPS

4 - Calculate the Factorial of a Number

Write a program that uses a while loop to calculate the factorial of a given number (e.g., 5). The factorial of 5 (5!) is 120.

Tip: The factorial of n (n!) is the product of all the numbers from 1 to n. */

const prompt = require("prompt-sync")()
let userInput = Number(prompt("Type a number and I'll calculate its factorial: "))
let loop = 1
let result = 1
while(loop <= userInput){
    result *= loop
    loop++
}
console.log("The factorial of", userInput, "is", result)

/* 5 - Reverse the Digits of a Number

Write a program that uses a while loop to reverse the digits of a given number (e.g., 1234 should be printed as 4321).

Tip: Use modulo and division operations to extract the digits. */

let number = 1234; // You can change this number to test different values
let reversed = 0;

while (number > 0) {
    let digit = number % 10; // Get the last digit
    reversed = (reversed * 10) + digit; // Append the digit to the reversed number
    number = (number - digit) / 10; // Remove the last digit from the original number
}

console.log("Reversed number:", reversed); // Output will be 4321

/* 6 - Check if a Number is a Palindrome

Write a program that uses a while loop to check if a given number (e.g., 121) is a palindrome. A number is a palindrome if it is equal to its reverse. */

let originalNumber = Number(prompt("Type 3 numbers and I'll check if it's a palindrome: "))
let isitPalindrome = originalNumber
let reversedNumber = 0
// Reversing the number
while (isitPalindrome > 0){
    let digit = isitPalindrome % 10 // getting the last digit
    reversedNumber = (reversedNumber * 10) + digit // build the reversed number
    isitPalindrome = (isitPalindrome - digit) / 10 // remove the last digit from the original number
}

if (reversedNumber === originalNumber){
    console.log(originalNumber, "is a palindrome.")
} else{
    console.log(originalNumber, "is not a palindrome.")
}

/* DO WHILE LOOPS

7 - Count the Number of Digits in a Number

Write a program that uses a do while loop to count the number of digits in a given number (e.g., 12345 has 5 digits).

Tip: Use division operations to reduce the number until it becomes zero. */

let loopCount = 0
let insertedNumber = (Number(prompt("Write a number and I'll count how many digits it has: ")))
let number3 = insertedNumber
do {  // do while runs the code at least once
    loopCount ++
    number3 = (number3 - (number3 % 10)) / 10
} while(number3 > 0)
console.log("The number", insertedNumber, "has", loopCount, "digits.")

/* 8 - Calculate the Sum of the Digits of a Number

Write a program that uses a do while loop to calculate the sum of the digits of a given number (e.g., the sum of the digits of 1234 is 10).

Tip: Use modulo operations to extract the digits and then sum them. */

insertedNumber = (Number(prompt("Write a number and I'll calculate the sum of its digits: ")))
number = insertedNumber
let sumOfDigits = 0
do {  
    lastDigit = number % 10 // extracts last digit
    sumOfDigits += lastDigit // adds the last digit to the sum
    number = Math.floor(number/10) // removes the last digit, math floor makes sure the number will remain an integer
} while(number > 0)
console.log("The sum of", insertedNumber, "is", sumOfDigits)

/* 9 - Print a Descending Star Pattern

Write a program that uses a do while loop to print a descending star pattern.

Tip: Use two loops, one inside the other. */

let rows = 5
let currentRow = rows
do {
    let stars = ""
    let tempRow = currentRow
    
    do {
        stars += "*"
        tempRow--
    } while(tempRow > 0)
    console.log(stars)
    currentRow--
}while(currentRow > 0)

/* 10 - Find the Greatest Common Divisor (GCD) of Two Numbers
Write a program that uses a do while loop to find the greatest common divisor (GCD) of two given numbers (e.g., 56 and 98).
Tip: Use the Euclidean algorithm, where you repeatedly replace the larger number with the difference of the two numbers until both numbers are equal. */

num1 = Number(prompt("Please insert the first number: "))
num2 = Number(prompt("Please insert the second number: "))

do {  
    let remainder = num1 % num2
    num1 = num2
    num2 = remainder
} while(num2 !== 0)
console.log("The greatest common divisor is", num1)

// Done! :D