/* 1) Calculate the average of a teacher's students' grades and check if it is above the passing average. 
Use a for...in loop to iterate over the properties inside professor.grades. 
Print whether the teacher's average is above the passing grade (considering 6.0 as the passing average). */

const professor = {
   name: "Tony Stark", 
   subject: "Physics",
   grades: [6.0, 2.5, 7.0, 9.4]
}
let sum = 0
let count = 0
for(let student in professor.grades){
    sum = professor.grades[student] + sum
    count += 1
}
average = sum / count
if (average >= 6.0) {
    let goodTeacher = true
    console.log(`${professor.name} is a good teacher, or maybe the students are good, or both:`)
} else {
    goodTeacher = false
    console.log(`Something's off: ${professor.name} might not be a good teacher, or the students are not very cooperative:`)
}
console.log(`The average of ${professor.name}'s grades is ${average.toFixed(2)}.`)

/* 2) Verify and list books published before 2000.
Use a loop for...of to iterate over the array Library.
Print the title and year of books corresponding to this condition. */
const library = [
    {title: "A Hora da Estrela", releaseYear: 1977},
    {title: "O Peso do Pássaro Morto", releaseYear: 2017},
    {title: "Quarto de Despejo", releaseYear: 1960},
    {title: "Bagagem", releaseYear: 1976},
]
for(let book of library){
    if (book.releaseYear < 2000){
        console.log(`${book.title} was released in ${book.releaseYear}.`)
    }
}

/* 3) Count the amount of movies per genre.
Use the method forEach to iterate over the array movies.
For each movie, verify if the genre already exists in the counted object.
If it does, increment the count; if it doesn't, add the genre to the object wih the inicial count of 1. */
const movies = [
    {title: "Lady Bird", releaseYear: 2017, director: "Greta Gerwig", genre: "Comedy-Drama"},
    {title: "The Piano", releaseYear: 1993, director: "Jane Campion", genre: "Drama"},
    {title: "Wonder Woman", releaseYear: 2017, director: "Patty Jenkins", genre: "Action"},
    {title: "Lost in Translation", releaseYear: 2003, director: "Sofia Coppola", genre: "Comedy-Drama"},
    {title: "Selma", releaseYear: 2014, director: "Ava DuVernay", genre: "Historical Drama"}
];
let genreCount = {}
movies.forEach(movie =>{
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    } else {
        genreCount[movie.genre] = 1
    }
})
for(let genre in genreCount){
    console.log(`There are ${genreCount[genre]} movies in ${genre}.`)
}