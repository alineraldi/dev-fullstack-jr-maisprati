let itemCount= 3;

let removeItem = document.getElementById('removeItem')
removeItem.addEventListener('click', () => {
    let listItems = document.querySelectorAll('ul li');
    if (listItems.length > 0) {
    let lastItem = listItems[listItems.length - 1];
    lastItem.remove()
    itemCount--;
}
let title = document.getElementById('title')
if (listItems.length < 2){
    title.innerHTML = 'There are no more items.'
}
})

let addItem = document.getElementById('addItem');
addItem.addEventListener('click', () => {
    let list = document.getElementById('list');
    itemCount++;
    let newItem = document.createElement('li')
    newItem.innerHTML = `Item ${itemCount}`
    list.appendChild(newItem)

    let title = document.getElementById('title')
    if(list.children.length >= 1){
        title.innerHTML = 'Welcome to the DOM Manipulator'
    }
})

// DONE! :D