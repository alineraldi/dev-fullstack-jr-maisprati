// Before getting started, make sure you have the following prerequisites installed on your machine:

// > Node.js (version 14.x or higher)
// > npm (usually installed with Node.js)
// > Visual Studio Code (VSCode) or any other text editor of your choice

// Cloning the Repository
// To clone this repository to your local machine, run the following command in your terminal:

// git clone https://github.com/alineraldi/dev-fullstack-jr-maisprati
// After cloning the repository, navigate to the project directory:
// cd module01
// cd extra_exercises


// How to Run the Exercises
// Use Node.js. In the terminal, execute:
// node tasks_list_2.js

const prompt = require("prompt-sync")()

// Object Manipulation

// 1. Accessing Object Properties
// Create a car object with properties like brand, model, year, and color. 
// Use a for...in loop to iterate over the properties and display their values in the console.

let car = {
    brand: "Bugatti",
    model: "Chiron Super Sport",
    year: 2024,
    color: "Jet Orange"
}

for(let key in car){
    console.log(`${key}: ${car[key]}`)
}

// 2. Checking Properties
// Create a book object with properties like title, author, yearPublished, and genre. 
// Check if the publisher property exists in the object using a for...in loop. 
// If it doesn't exist, add this property to the object.
let book = {
    title: "Fire and Blood",
    author: "George R.R. Martin",
    yearPublished: 2018,
    genre: "Fantasy"
}
hasPublisher = false;
for(let i in book){
    if(i === "publisher"){
        hasPublisher = true
        break
    }    
}
if(hasPublisher == false){
    book.publisher = "Bantam Books";
}
for(let i in book){
    console.log(`${i}: ${book[i]}`)
}

// 3. Filtering Object Properties
// Given a product object with various properties, 
// create a function that returns a new object containing only the properties whose values are greater than a specified value. 
// Use a for...in loop to filter the properties.

let pen = {
    brand: "BIC",
    tipSizeMm: 1,
    lengthMm: 140,
    packSizeUnit: 10,
    inkVolumeMl: 0.3,
    weightG: 10
}

function filter(product, filter){
    let newObject = {};
    for(let i in product){
        if(product[i] > filter){
            newObject[i] = product[i];
        }
    } 
    console.log(newObject);
}

filter(pen, 10)

// MANIPULATING OBJECT ARRAYS USING FOR OF

// 4 - Iterating Over Arrays of Objects
// Create an array of person objects, where each object represents a person 
// with properties name, age, and city. 
// Use a for...of loop to display the information of each person in the console.

const people = [
    {name: "Gulherme", age: 31, city: "Porto Alegre"},
    {name: "Rita", age: 54, city: "Porto Alegre"},
    {name: "Giulia", age: 27, city: "Porto Alegre"},
]

for(let i of people){
    console.log(i)
}

// 5. Calculating Values in Arrays of Objects
// Create an array of student objects, each with properties name, grade1, and grade2. 
// Use a for...of loop to calculate the average grade for each student and display 
// the student's name along with their average.

const students = [
    {name: "Aline", grade1: 100, grade2: 95},
    {name: "Deivid", grade1: 68, grade2: 78},
    {name: "Raí", grade1: 87, grade2: 80}
]
for(let i of students){
    let result = (i.grade1 + i.grade2) / 2
    console.log(`${i.name}: ${result}`)
}

// 6. Filtering Arrays of Objects
// Create an array of employee objects, where each object contains information 
// such as name, position, and salary. Use a for...of loop to filter and display 
// only the employees whose salary is greater than a specific value.

const employees = [
    {name: "Fulana", position: "CEO", salary: 30.000},
    {name: "Cicrana", position: "Manager", salary: 5.000},
    {name: "Beltrana", position: "COO", salary: 15.000}
]

for(let i of employees){
    if(i.salary > 10.000){
        console.log(`${i.name} - ${i.salary}`)
    }
}

// MANIPULATING OBJECT ARRAYS USING FOREACH
// 7. Modifying Objects in an Array
// Create an array of product objects, where each object has properties 
// name, price, and discount. Use forEach to apply a 10% discount to all products and 
// display the new price.

const products = [
    {name: "Eraser", price: 2.00, discount: 0.5},
    {name: "Pencil case", price: 30, discount: 5},
    {name: "Pencil sharpener", price: 6, discount: 0.75}
]
products.forEach(i => {
    i.price =  i.price - (i.price / 100)   
    console.log(`${i.name}: ${i.price.toFixed(2)}`)
})

// 8. Creating New Arrays from Objects
// Create an array of movie objects, where each movie has title, director, and releaseYear. 
// Use forEach to create a new array containing only the titles of the movies.

const movies = [
    {title: "The Farewell", director: "Lulu Wang", releaseYear: 2019},
    {title: "Little Women", director: "Greta Gerwig", releaseYear: 2019},
    {title: "Nomadland", director: "Chloé Zhao", releaseYear: 2020},
    {title: "The Piano", director: "Jane Campion", releaseYear: 1993},
    {title: "Wonder Woman", director: "Patty Jenkins", releaseYear: 2017}
];

let moviesNew = []
movies.forEach(j =>{
    moviesNew = moviesNew + " " + j.title
})
console.log(moviesNew)

// 9. Counting Elements with a Condition
// Create an array of client objects, each with properties name, age, and city. 
// Use forEach to count how many clients are older than 30 years.

const clients = [
    { name: "Alice", age: 28, city: "New York" },
    { name: "Bob", age: 35, city: "Los Angeles" },
    { name: "Charlie", age: 42, city: "Chicago" },
    { name: "Diana", age: 31, city: "San Francisco" },
    { name: "Eve", age: 22, city: "Seattle" }
];

counter = 0
clients.forEach(k => {
    if(k.age > 30){
        counter += 1
    }
})
console.log(`There are ${counter} clients over 30 years old.`)

//COMBINING STRUCTURES
