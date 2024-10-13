const prompt = require("prompt-sync")()

function cafeOrder(coffeeType) {
    return new Promise((resolve, reject) => {
        if(coffeeType === 1) {
            setTimeout(() => {
                let message = "Your expresso is ready!"
                resolve(message)
            }, 2000)
        } else if (coffeeType === 2) {
            setTimeout(() => {
                let message = "Your latte is ready!"
                resolve(message)
            }, 3000)
        } else {
            const error = "Coffee not available."
            reject(error)
        }
    })
}

function makeRequest() {
    let coffeeType = Number(prompt("Please, select the coffee you'd like: \n 1- Expresso | 2- Latte \n"))
    cafeOrder(coffeeType).then((message) => {
        console.log(message)
    }).catch((error) => {
        console.log(error)
    })
}

makeRequest()