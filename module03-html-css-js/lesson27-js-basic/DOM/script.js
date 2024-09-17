let title = document.getElementById('title')
console.log(title.textContent)

title.textContent = "Javascript Basics"
title.innerHTML = "Title modified through innerHTML"

title.style.color = "blue";

let button = document.getElementById('button')

button.addEventListener('click', () => {
    alert("You clicked on me!")
})

let newParagraph = document.createElement('p')
newParagraph.innerHTML = "This is a new paragraph, created on Javascript."
document.body.appendChild(newParagraph)
newParagraph.style.color = 'red';
newParagraph.style.backgroundColor = 'lime';