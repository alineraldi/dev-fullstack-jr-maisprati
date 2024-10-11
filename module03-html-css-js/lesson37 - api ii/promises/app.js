const pizzaOrder = new Promise((resolve, reject) => {
    let pizzaReady = true
    if(pizzaReady) {
        resolve("The pizza was delivered.")
    } else {
        reject("The pizza order has failed.")
    }
})

//how to use this promise? ↓
pizzaOrder.then((message) => {
    console.log(message)
})

.catch((error) => {
    console.log(error)
})

function dataSearch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name: 'John', age: 50}
            resolve(data)
        }, 2000)
    })
}

dataSearch().then((data) => {
    console.log("Data received: ", data)
}).catch((error) => {
    console.log("There was an error while searching for data.", error)
})

function login(user) {
    return new Promise((resolve, reject) => {
        if (user === 'Emerson'){
            resolve("Login executed succesfully.")
        } else {
            reject("Authentication failure.")
        }
    })
}

function profileSearch() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve({name: "Emerson", job: "Dev"})
        }, 2000)
    })
}

login("Emerson").then((message) => {
    console.log(message)
    return profileSearch()
}).then((profile) => {
    console.log(profile)
}).catch((error) => {
    console.log(error)
})