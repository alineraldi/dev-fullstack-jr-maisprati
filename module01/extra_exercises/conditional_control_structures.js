/* // IF
/* 1 - Check if a number is positive, negative, or zero
Write a program that reads a number and uses an if statement to check if the number is positive, negative, or zero. Print an appropriate message for each case. */
const prompt = require("prompt-sync")()
let userEntry = Number(prompt("Type a number and I'll check if it's positive, negative or zero: "))
if(userEntry == 0){
    console.log("The number's zero.")
} else if(userEntry > 0){
    console.log("The number's positive.")
} else{
    console.log("The number's negative.")
}

/* 2 - Check if a year is a leap year
Write a program that reads a year and uses an if statement to check if the year is a leap year. A year is a leap year if it is divisible by 4 but not by 100, except if it is also divisible by 400. Print an appropriate message. */
userEntry = Number(prompt("Type a year and I'll check if it's a leap year: "))
if ((userEntry % 4 === 0 && userEntry % 100 !== 0) || (userEntry % 4 === 0 && userEntry % 400 === 0)) {
    console.log(userEntry, "is a leap year.")
} else{
    console.log(userEntry, "is not a leap year. Too bad!")
}

/* 3 - Calculate the average of three numbers and determine the grade
Write a program that reads three grades from a student, calculates the average, and uses an if/else statement to determine the grade (A, B, C, D, E, F) based on the average. Print the grade.
Tip: The average is the sum of the grades divided by three. Define the ranges for each grade. */

studentName = prompt("What's the name of the student? ")
grade1 = Number(prompt("Type his/her 1st grade (1-10): "))
grade2 = Number(prompt("Type his/her 2nd grade (1-10): "))
grade3 = Number(prompt("Type his/her 3rd grade (1-10): "))
average = (grade1 + grade2 + grade3) / 3
if(average < 5){
    console.log(studentName, "'s average grade is F.")
} else if(average >= 5 && average < 6){
    console.log(studentName, "'s average grade is E.")
} else if(average >= 6 && average < 7){
    console.log(studentName, "'s average grade is D.")
} else if(average >= 7 && average < 8){
    console.log(studentName, "'s average grade is C.")
} else if(average >= 8 && average < 9){
    console.log(studentName, "'s average grade is B.")
} else{
    console.log(studentName, "'s average grade is A.")
}

/* 4 - Check if a number is even or odd
Write a program that reads a number and uses an if/else structure to check if the number is even or odd. Print an appropriate message. */
userEntry = Number(prompt("Type a number and I'll tell you if it's even or odd: "))
if (userEntry % 2 == 0){
    console.log("It's an even number")
} else{
    console.log("It's an odd number.")
}

/* 5 - Check the category of a swimmer
Write a program that reads the age of a swimmer and uses an if/else structure to determine the category of the swimmer according to their age:
Kids A: 5 - 7 years
Kids B: 8 - 10 years
Junior A: 11 - 13 years
Junior B: 14 - 17 years
Adult: 18 years or older */
swimmerName = prompt("What's the swimmer's name? ")
swimmerAge = Number(prompt("How old's the swimmer? "))
if (swimmerAge >= 18){
    console.log(swimmerName, "is in the Adult category.")
} else if(swimmerAge >= 14 && swimmerAge <= 17){
    console.log(swimmerName, "is in the Junior B category.")
} else if(swimmerAge >= 11 && swimmerAge <= 13){
    console.log(swimmerName, "is in the Junior A category.")
} else if(swimmerAge >= 8 && swimmerAge <= 10){
    console.log(swimmerName, "is in the Kids B category.")
} else{
    console.log(swimmerName, "is in the Kids A category.")
}

/* SWITCH CASE
 6 - Check the day of the week
Write a program that reads a number from 1 to 7 and uses a switch structure to print the corresponding day of the week. (1 = Sunday, 2 = Monday, etc.)*/
let dayOfWeek = Number(prompt("Type a number from 1 to 7 and I'll tell you which day of the week it is: "))
switch(dayOfWeek){
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.log("You haven't selected a valid option.")
        break
    
}

/* 7 - Calculate the value of a simple mathematical expression
Write a program that reads two numbers and an operator (+, -, *, /) and uses a switch structure to calculate the result of the operation. Print the result.
Tip: Use the arithmetic operators in each case of the switch.*/
num1 = Number(prompt("Please insert the first number: "))
num2 = Number(prompt("Please insert the second number: "))
operation = Number(prompt("Now, choose which operator to use. Type 1 for +, 2 for -, 3 for * and 4 for /."))
switch(operation){
    case 1:
        result = num1 + num2
        console.log(num1, "+", num2, "=", result)
        break
    case 2:
        result = num1 - num2
        console.log(num1, "-", num2, "=", result)
        break
    case 3:
        result = num1 * num2
        console.log(num1, "*", num2, "=", result)
        break
    case 4:
        result = num1 / num2
        console.log(num1, "/", num2, "=", result)
        break
    default:
        console.log("This is not a valid option.")
}

/* 8 - Check the season of the year
Write a program that reads a number from 1 to 4 and uses a switch structure to print the corresponding season of the year. (1 = Spring, 2 = Summer, 3 = Autumn, 4 = Winter) */
season = Number(prompt("Insert a number from 1 to 4 and I'll tell you the season: "))
switch(season){
    case 1:
        console.log("Spring")
        break
    case 2:
        console.log("Summer")
        break
    case 3:
        console.log("Fall")
        break
    case 4:
        console.log("Winter")
        break
    default:
        console.log("Error")
}

/* 9 - Check a person's age group
Write a program that reads a person's age and uses an if/else structure to determine the age group:
Child: 0 - 12 years
Teenager: 13 - 17 years
Adult: 18 - 59 years
Senior: 60 years or older
Tip: Use a switch structure in addition to the if/else block to print a specific message for each age group. */

let ageGap = 0
age = Number(prompt("Tell me your age and I'll tell you the age gap you're in: "))

if(age >= 0 && age <= 12){
    ageGap = 1
} else if(age >= 13 && age <= 17){
    ageGap = 2
} else if(age >= 18 && age <= 59){
    ageGap = 3
} else{
    ageGap = 4
}

switch(ageGap){
    case 1:
        console.log("Grab your pacifier: You're a child.")
        break
    case 2:
        console.log("Go spend the day with your online friends: You're a teenager.")
        break
    case 3:
        console.log("Time to pay the bills! You're an adult.")
        break
    case 4:
        console.log("Time for R&R! You're a senior.")
        break
    default:
        console.log("Error: Invalid option.")
}

/* 10 - Calculate BMI and determine the category
Write a program that reads a person's weight (kg) and height (m), calculates the Body Mass Index (BMI), and uses an if/else structure to determine the category:
Underweight: BMI < 18.5
Normal weight: BMI 18.5 - 24.9
Overweight: BMI 25 - 29.9
Obesity class I: BMI 30 - 34.9
Obesity class II: BMI 35 - 39.9
Obesity class III: BMI >= 40
Tip: BMI is calculated as weight divided by height squared (BMI = weight / height²). */

let bmi = 0
let weight = Number(prompt("Let's calculate your Body Mass Index. Please, type your weight (in kg): "))
let height = Number(prompt("Good. Now, type your height (in m): "))

let squareHeight = height * height
let total = weight / squareHeight

if(total < 18.5){
    bmi = 1
} else if(total >= 18.5 && total <= 24.9){
    bmi = 2
} else if(total >= 25 && total <= 29.9){
    bmi = 3
} else if(total >= 30 && total <= 34.9){
    bmi = 4
} else if(total >= 35 && total <= 39.9){
    bmi = 5
} else {
    bmi = 6
}

switch(bmi){
    case 1:
        console.log("You're underweight!")
        break
    case 2:
        console.log("You have a normal weight!")
        break
    case 3:
        console.log("You're  overweight!")
        break
    case 4:
        console.log("You're Obese class I!")
        break
    case 5:
        console.log("You're Obese class II!")
        break
    case 6:
        console.log("You're Obese class III !")
        break
    default:
        console.log("Error.")

}

// DONE! :D