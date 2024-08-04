/* Multidimensional Arrays */

let thingsList = Array()
thingsList["languages"] = Array("Portuguese", "Danish", "Japanese", "English")
thingsList["places"] = Array("my house", "my workplace", "Greece", "a video rental shop")
thingsList["languages"][4] = "French" // You can add elements like that as well
thingsList["places"][0] = "Walmart" // You can replace an element from an index
console.table(thingsList)

let fruitsList = Array()
fruitsList[0] = "Banana"
fruitsList[1] = "Watermelon"
fruitsList[2] = "Peach"
fruitsList[3] = "Grape"
fruitsList[4] = "Guava"
// Create a function that reorganizes the elements in a different order
console.log(fruitsList.sort())

// Testing sort() in a numbered array

let numberList = []
numberList[0] = 12
numberList[1] = 13
numberList[2] = 0
numberList[3] = 8
numberList[4] = 16

console.log(numberList.sort((a, b) => a - b)) // (a, b) => a - b) ensures numerical sorting

/* Here's how the comparator function works:

For any two elements a and b in the array:
If a - b is less than 0, a is considered smaller and should come before b.
If a - b is greater than 0, a is considered larger and should come after b.
If a - b equals 0, a and b are considered equal, and their order doesn't change. */

// Locating the index of an element
index = fruitsList.indexOf("Guava")
if(index === -1){
    console.log("The element does not exist.")
} else{
    console.log(`The element is in the position ${index}.`)
}

// F U N C T I O N S

function calculateLandArea(a, b){
    let area = a * b // These variables exist only inside this function
    return area
}
let width = 100
let height = 50
let area = calculateLandArea(width, height) // That's why you need to declare the variable area once again
console.log(`The area has ${area} square meters.`)

// Create a sorting function to organize an array

let alphabet = ["A", "D", "E", "F", "C", "B"]

function sortingFunction(alphabetArray){
    return alphabetArray.sort()

}

console.log(sortingFunction(alphabet))