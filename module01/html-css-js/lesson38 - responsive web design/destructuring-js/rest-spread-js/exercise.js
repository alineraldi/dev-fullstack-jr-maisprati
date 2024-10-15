/* Create a function called calculateAverage which accepts an indefinite amount of student grandes and calculates its average.*/

function calculateAverage(...numbers) {
    const sum = numbers.reduce((total, number) => total + number, 0);
    return sum / numbers.length
}

console.log(calculateAverage(9, 10, 7, 5))

/* Imagine you're developing an e-commerce system and must merge current client data with a recent update. The old data is inside an object, an new data are inside another one. Use the spead operator to create a new object containing updated infos.*/

let currentClientData = {
    name: 'Aline',
    age: 27,
    job: 'Web developer'
}

let newClientData = {
    telephone: '99457894',
    zipcode: '90550003'
}

let updatedClientData = { ...currentClientData, ...newClientData }
console.log(updatedClientData)