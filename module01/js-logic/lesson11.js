/* ANONYMOUS FUNCTIONS are nameless functions, wrapped inside a variable.
Why would you need a an anonymous function?
For when you don't need a return. You can put it inside another function. 

When you use a function as a parameter, we call it a Callback. */

function showFunction(successCallback, errorCallback) {
    if(false){
        successCallback("Success.")
    } else{
        errorCallback("Error.")
    }
}
let successCallback = function(message) {
    console.log(message)
}

let errorCallback = function(message) {
    console.error(message)
}
showFunction(successCallback, errorCallback)

// Challenge: Redo the algorithms from lesson09, using anonymous functions. From now on, all of our algorithms will be based on functions.

/* 1- Sum of Array Elements
Write a function that receives an array of numbers as a parameter and returns the sum of all the elements. */
let numbers = Array()
let arrSum = function(numbers) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    
    return sum
}

numbers = [1, 2, 3, 4, 5, 6, 7]
let sum = arrSum(numbers)
console.log(sum)

/* 2. Find the biggest number in an Array. */
let findBiggest = function(numbers){
    let max = numbers[0]
    for (let j = 0; j < numbers.length; j++){
        if (numbers[j] > max){
            max = numbers[j]
        }
    }
    return max
}
max = findBiggest(numbers)
console.log("The biggest number is", max)

/* 3. Reverse the Numbers in an Array */
console.log("Original array:", numbers)
let reverseFunction = function(nbs){
    let reversedNumbers = [] // Initialization of the Reversed Array:
    for (let k = numbers.length - 1; k >= 0; k--){ // numbers.length - 1 gives the index of the last element, which is 6 in this case
        reversedNumbers.push(numbers[k]) // It takes the element at the current index k of the numbers array and adds it to the end of the reversedNumbers array using the push method.
    }
    return reversedNumbers
}
reversing = reverseFunction(numbers)
console.log(`Reversing ${numbers}: ${reversing}`)

/* 4. Create a new array containing only the even numbers. */
let selectEven = function(arr){
    let evenNumbers = []
    for(let l = 0; l < numbers.length; l++){
        if (numbers[l] % 2 == 0){
            evenNumbers.push(numbers[l])
        }
    }
    return evenNumbers
}
even = selectEven()
console.log(`Selecting even numbers from ${numbers}: ${even}`)

/* 5. Count the occurrences of a certain value */
let occCount = function(nB, tN){
    let oC = 0
    for(let m = 0; m < nB.length; m++){
        if(nB[m] == tN){
            oC += 1
        }
    }
    return oC
}
let targetNumber = 2
occurenceCounter = occCount(numbers, targetNumber)
console.log(`The number ${targetNumber} appears ${occurenceCounter} times in this array.`)


/* Manipulating strings */
let myName = "Aline Raldi Franco"
console.log(myName.length) // prints how long the array is, how many characters it has, including spaces
console.log(myName.charAt(0)) // locates a character
console.log(myName.indexOf("R")) // returns the index of a certain character
console.log(myName.indexOf("w")) // returns -1 since this character is not a part of the string
console.log(myName.replace("Franco", "")) // self-explanatory
console.log(myName.substr(0, 5)) // extracts part of the string (start, length)
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

/* Mathematical manipulations */
console.log(Math.ceil(100.73)) // rounds the number UP to the nearest integer
console.log(Math.floor(100.73)) // rounds the number DOWN to the nearest integer
console.log(Math.round(100.73)) // rounds the number to the nearest integer
console.log(Math.sqrt(149)) // calculates the square root
console.log(Math.pow(2, 3)) // raises a number (1st parameter) to the power of another number (2nd parameter)
console.log(Math.random()) //  generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 100) // generates a number from 0 to 100

/* Manipulating dates */

let date = new Date()
console.log(date.getDate()) // returns the day for the user
console.log(date.getMonth() + 1) // +1 adjusts the index(0) and returns the month
console.log(date.getFullYear())
console.log(date.toString()) // turns the date into a string

let date1 = new Date(2024, 8, 8)
let date2 = new Date(2023, 8, 8)
console.log(date2.toString())
console.log(date1.getTime()) // returns the amount of miliseconds since 1-1-1970
console.log(date2.getTime())
let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime()) // calculating the difference in miliseconds between the dates
console.log(miliseconds_between_dates)
let miliseconds_per_day = (1 * 24 * 60 * 60 * 1000) // treating data
console.log(`There are ${miliseconds_per_day} miliseconds in one day.`)
console.log(`The difference between ${date1.toDateString()} and ${date2.toDateString()} is of ${Math.ceil(miliseconds_between_dates/miliseconds_per_day)} days.`)