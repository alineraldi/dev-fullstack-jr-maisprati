const prompt = require("prompt-sync")()
/* 1. Write a program that receives a number and checks whether it is even or odd using an if control structure */
let userEntry = Number(prompt("Type a number and I'll check if it's even or odd: "))
if (userEntry % 2 == 0){
    console.log(`${userEntry} is an even number.`)
} else {
    console.log(`${userEntry} is an odd number.`)
}

/* 2. Create a program that classifies a person's age into categories (child, teenager, adult, elderly) 
based on the provided value, using an if-else control structure. */
let userAge = Number(prompt("Type your age and I'll tell you which age group you're a part of: "))
if (userAge <= 12){
    console.log("You're a child! How sweet!")
} else if (userAge >= 13 && userAge < 18){
    console.log("Confusing times... You're a teenager!")
} else if (userAge >= 18 && userAge < 60){
    console.log("Time to pay the bills: You're an adult.")
} else {
    console.log("Time for rest and relaxation! Or at least that's what they say... You're an elder!")
}

/* 3. Implement a program that receives a grade from 0 to 10 and classifies it as "Passed," "Recovery," or "Failed" using if-else if. */
let userGrade = Number(prompt("I dare you: Type your grade and I'll tell you if you passed the test: "))
if (userGrade >= 7){
    console.log("Congratulations: You passed!")
} else if (userGrade >= 5){
    console.log("You're in recovery. There's still time!")
} else {
    console.log("You failed. Too bad!")
}

/* 4 - Create an interactive console menu that offers the user three options. Use switch-case to implement the logic for each selected option. */
season = Number(prompt("Type a number from 1 to 10 and I'll write the number word: "))
switch(season){
    case 1:
        console.log("One.")
        break
    case 2:
        console.log("Two.")
        break
    case 3:
        console.log("Three.")
        break
    case 4:
        console.log("Four.")
        break
    case 5:
        console.log("Five.")
        break
    case 6:
        console.log("Six.")
        break
    case 7:
        console.log("Seven.")
        break
    case 8:
        console.log("Eight.")
        break
    case 9:
        console.log("Nine.")
        break
    case 10:
        console.log("Ten.")
        break
    default:
        console.log("Oops! Something went wrong.")
}

/* 5. Write a program that calculates a person's Body Mass Index (BMI) and determines the weight category (underweight, normal weight, overweight, obesity) using if-else. */
let weight = Number(prompt("Let's calculate your Body Mass Index. Please, type your weight (in kg): "));
let height = Number(prompt("Good. Now, type your height (in m): "));
let bmi = weight / (height * height);

if (bmi < 18.5) {
    bmi = 1;
} else if (bmi >= 18.5 && bmi <= 24.9) {
    bmi = 2;
} else if (bmi >= 25 && bmi <= 29.9) {
    bmi = 3;
} else if (bmi >= 30 && bmi <= 34.9) {
    bmi = 4;
} else if (bmi >= 35 && bmi <= 39.9) {
    bmi = 5;
} else {
    bmi = 6;
}

switch (bmi) {
    case 1:
        console.log("You're underweight!");
        break;
    case 2:
        console.log("You have a normal weight!");
        break;
    case 3:
        console.log("You're overweight!");
        break;
    case 4:
        console.log("You're Obese class I!");
        break;
    case 5:
        console.log("You're Obese class II!");
        break;
    case 6:
        console.log("You're Obese class III!");
        break;
    default:
        console.log("Error.");
}


/* 6- Read three values for the sides of a triangle: A, B, and C. 
Check if the given sides actually form a triangle. If they do, indicate the type of triangle: Isosceles, Scalene, or Equilateral. */
let sideA = Number(prompt("Enter the first side of the triangle: "))
let sideB = Number(prompt("Good. Now, the second one: "))
let sideC = Number(prompt("Finally, the third one: "))

if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA){
    console.log("You got yourself a triangle!")
    if (sideA === sideB && sideB === sideC){
        console.log("It is an Equilateral triangle.")
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        console.log("It is an Isosceles triangle.")
    } else{
        console.log("It is a Scalene triangle.")
    }
} else {
    console.log("Sadly, this is not a triangle.")
}

/* 7 -Apples cost R$ 0.30 if fewer than a dozen are purchased, and R$ 0.25 if at least a dozen are purchased. 
Write an algorithm that reads the number of apples purchased, calculates, and writes the total cost of the purchase.
 */
let appleCalculator = function(quantApples) {
    let totalCost = 0
    if(quantApples < 12){
        totalCost = quantApples * 0.30
    } else {
        totalCost = quantApples * 0.25
    }
    
    return totalCost
}
let quantApples = Number(prompt("How many apples would you like? "))
let totalCost = appleCalculator(quantApples)
console.log(`You're ordering ${quantApples} apples for $ ${totalCost.toFixed(2)}.`) //// ToFixed ensures the output will be 2 decimal places.

/* 8 - Write an algorithm to read 2 values (considering that the values read will not be equal) and display them in ascending order. */
let validValues = true
let firstValue = Number(prompt("Type a number: "))
let secondValue = Number(prompt("Type another number: "))
if (secondValue === firstValue) {
    console.log("I asked you to type _another_ number... but you have some sort of a rebellious nature, don't you? Algorithm over.")
} else {
    if (firstValue > secondValue){
        console.log(`${firstValue} is bigger than ${secondValue}.`)
    } else{
        console.log(`${secondValue} is bigger than ${firstValue}.`)
    }
}

/* 9 - Implement a program that displays a countdown from 10 to 1 in the console using a for loop. */
for (let i = 10; i >= 1; i -= 1){ >= ////makes sure the loop CONTINUES as long as i is bigger or equal to 1 
    console.log(i)
}

/* 10 - Write an algorithm to read an integer and display it on the screen 10 times. */
let numA = Number(prompt("Type a number and I'll type it back 10x: "))
for (let j = 1; j <= 10; j++){
    console.log(numA)
}

/* 11 - Write a program that asks the user for 5 numbers and calculates the total sum using a for loop. */
sum5 =0
for(let k = 0; k <= 4; k++){
    userEntry = Number(prompt("Type a number: "))
    sum5 = sum5 + userEntry
}
console.log(`The sum of the 5 numbers you've just typed is ${sum5}.`)

/* 12 - Create a program that displays the multiplication table for a number provided by the user (from 1 to 10) using a for loop. */
userNumber = Number(prompt("I dare you to type a number and watch me as I show you its multiplication table: "))
for(let l = 1; l <= 10; l++){
    total = userNumber * l
    console.log(`${userNumber} x ${l} = ${total}`)
}

/* 13 - Create an algorithm to receive decimal numbers until the user enters 0 and then calculate the arithmetic average of these numbers. */
let userEntry = 1
let sum = 0
let counter = 0
while (userEntry !== 0){
    userEntry = parseFloat(prompt("Please, insert a number (type 0 to exit): "))
    sum = sum + userEntry
    counter += 1
}
let average = sum / counter
console.log(`The arithmetic mean of the numbers you've typed is ${average.toFixed(2)}.`)

/* 14 - Create a program that calculates the factorial of a number provided by the user using a for or while loop. */
let factorial = 1
let userNumber = Number(prompt("I dare you to type a number and watch me, as I show you its factorial: "))
for (let m = userNumber; m >= 1; m -= 1){
    factorial = m * factorial
}
console.log(`${userNumber}! = ${factorial}`)

/* 15 - Write a program that generates and prints the first 10 numbers of the Fibonacci sequence using a for loop. */
/* What is the fibonaccisequence?(had to research) The Fibonacci sequence is calculated by adding the two previous terms to get the next term. */
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