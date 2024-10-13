/* Introduction to Objects */
// A "key-value" pair is a data structure where a unique key is associated with a specific value, allowing easy access to the value using the key.
let serie = {
    name: "House of the Dragon",
    genre: "Fantasy, Drama",
    nrSeasons: 2,
    status: "Ongoing",
    ageRestriction: 18,
    nrEpisodes: {
        temp1: 10,
        temp2: 10
    }, 

    showFeatures: function() { // You can add a function inside an object
        return `The tv show's name is ${this.name} and its age restrictions is ${this.ageRestriction}.`   
    }
}
console.log(serie.showFeatures()) // Prints the specific attribute
// ALL of this, this entire object, can be a position in an array.

/* Exercise 1 - Create a book as an object */
let book = {
    name: "The Bluest Eye",
    author: "Toni Morrison",
    releaseYear: 1970,
    genre: "Novel",
    totalPages: 224,
    edition: "Hardcover",
    shwFeatures: function(){
        return (this.name + " is a " + this.genre + " written by " + this.author + " and released in " + this.releaseYear)
    }
}
console.log(book.shwFeatures())

// You can add features in a different way:
let name = "Inception"
let director = "Christopher Nolan"
let genre = "SciFi"
let film = {
    name: name,
    director: director,
    genre: genre
}
console.log(film)


/* CONSTRUCTOR FUNCTIONS */

function computer(cpu, gpu, ram, storage){
    this.cpu = cpu
    this.gpu = gpu
    this.ram = ram
    this.storage = storage

    this.turnOn = function(){
        console.log(`The ${this.cpu} is working`)
    }

    this.showSpecifics = function(){ // this is a constructor function
        console.log(`
            cpu: ${this.cpu}
            gpu: ${this.gpu}
            ram: ${this.ram}
            storage: ${this.storage}`)
    }
}
let pc = new computer("i9", "RTX4090", "16GB", "500GB SSD") // you MUST use "new" to declare a new object
console.log(pc.showSpecifics())

function games(title, genre, releaseYear, company, play){
    return {
        title,
        genre, 
        releaseYear,
        company,
        play
    }
}

let game1 = games("Final Fantasy", "RPG", "1997", "Square Soft", () => console.log("Now Playing"))
console.log(game1)

/* DIFFERENT METHODS FOR ITERATING OVER elements IN COLLECTIONS OR OBJECTS:

--- FOR IN: ITERATES OVER THE ENUMERABLE PROPERTIES (KEYS) OF AN OBJECT. */
for(let key in game1){
    console.log(`${key}: ${game1[key]}`)
}

/* FOR...OF: ITERATES OVER THE values OF AN ITERABLE (LIKE ARRAYS, STRINGS, MAPS, SETS).*/
const players = ["Pelé", "CR7", "Messi"]
for(let player of players){
    console.log(player)
}

/* FOREACH: EXECUTES A FUNCTION FOR EACH ELEMENT IN AN ARRAY */
players.forEach((value, index) => {
    console.log(`The index is: ${index} and the value is ${value}`)
})

/* Final challenge: iterate the objects developed in this class using forIn and forOf */
console.log("For In:")
for(let key in serie){
    console.log(`${key}: ${serie[key]}`)
}
for(let key in book){
    console.log(`${key}: ${book[key]}`)
}
for(let key in pc){
    console.log(`${key}: ${pc[key]}`)
}
console.log("For Of:")
let seriesArray = [
    "House of the Dragon",
    "Game of Thrones"
];

let booksArray = [
    "The Bluest Eye",
    "Beloved"
];

let pcsArray = [
    "Dell XPS 15",
    "MacBook Pro"
];
for(let serie of seriesArray){
    console.log(serie)
}

for(let book of booksArray){
    console.log(book)
}

for(let key of pcsArray){
    console.log(pc)
}