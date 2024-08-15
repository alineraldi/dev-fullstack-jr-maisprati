/* 1. Write a program that receives a number and checks whether it is even or odd using an if control structure */
const prompt = require("prompt-sync")()
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




