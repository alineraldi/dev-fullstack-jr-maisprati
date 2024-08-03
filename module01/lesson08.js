// This first part of this lesson was dedicated to developing the control structures activities from the extra exercises list. 
// The exercises are available in the "extra_exercises" folder.

/* Arrays
On Js, an array is an Object, and here's how you declare it: */

let movies = Array()
// Array possibilities: what data types can I declare in the same array? Answer: Yes
movies[0] = "Harry Potter"
movies[1] = 1984
movies[2] = true
movies["Filme 4"] = "Solaris"

movies.push("Maxxxine") // adds elements at the end of an array
movies.unshift("Pearl") // adds elements at the beginning
movies.pop() // deletes the last element (in a numbered index)
movies.shift() // deletes the first element
movies.splice(1,0,"Lord Of The Rings") // Parameters: index number, how many items will be removed, ekement
console.log(movies)
