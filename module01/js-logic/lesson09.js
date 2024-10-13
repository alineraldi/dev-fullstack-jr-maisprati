/* 1- Sum of Array Elements
Write a function that receives an array of numbers as a parameter and returns the sum of all the elements. */
let numbers = Array()
numbers = [1, 2, 3, 4, 5, 6, 7]
let sum = 0
console.log(numbers)
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log("The sum of", numbers, "is", sum)

/* 2. Find the biggest number in an Array. */
max = numbers[0]
for (let j = 0; j < numbers.length; j++){
    if (numbers[j] > max){
        max = numbers[j]
    }
}
console.log("The biggest number in", numbers, "is", max)

/* 3. Reverse the Numbers in an Array */
console.log("Original array:", numbers)
let reversedNumbers = [] // Initialization of the Reversed Array:
for (let k = numbers.length - 1; k >= 0; k--){ // numbers.length - 1 gives the index of the last element, which is 6 in this case
    reversedNumbers.push(numbers[k]) // It takes the element at the current index k of the numbers array and adds it to the end of the reversedNumbers array using the push method.
}
console.log(reversedNumbers)

/* 4. Create a new array containing only the even numbers. */
let evenNumbers = []
for(let l = 0; l < numbers.length; l++){
    if (numbers[l] % 2 == 0){
        evenNumbers.push(numbers[l])
    }
}
console.log("Even numbers from original array:", evenNumbers)

/* 5. Count the occurrences of a certain value */
let occurenceCounter = 0
let targetedNumber = 2
for(let m = 0; m < numbers.length; m++){
    if(numbers[m] == targetedNumber){
        occurenceCounter += 1
    }
}
console.log("The number", targetedNumber, "appears", occurenceCounter, "times in this array.")

/* 6. Print a message that show the location of each element in an array. */
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for(let n = 0; n < matrix.length; n++){
    for(let o = 0; o < matrix.length; o++){
        console.log(`Elemento na posição [${n}][${o}]: ${matrix[n][o]}`)
    }
}
// In order to make a loop for run through a multidimensional array, you must use a loop for inside another one. One's for lines, the other's for columns.

// Dealing with two Multidimensional Arrays -- SUM //
let result = []
let arr1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

let arr2 = [
    [2, 4, 6, 8],
    [10, 12, 14, 16],
    [18, 20, 22, 24]
]

for(let p = 0; p < arr1.length; p++){
    let lineSum = []
    for(let q = 0; q < arr1[p].length; q++){
        lineSum.push(arr1[p][q] + arr2[p][q])
    }
    
    result.push(lineSum)
}
console.table(result)
