document.addEventListener("DOMContentLoaded", () => {
    let button1 = document.getElementById('button-1')
    let button2 = document.getElementById('button-2')
    let button3 = document.getElementById('button-3')

    let resultsContainer = document.querySelector('.results')

    button1.addEventListener('click', () => {
        updateDivContent(`
            <ul>
                <li>React is extremely popular</li>
                <li>It makes building complex, interactive UIs a breeze</li>
                <li>It's powerful & flexible</li>
                <li>It has a very active and versatile ecosystem</li>
            </ul>`
    )});

    button2.addEventListener('click', () => {
        updateDivContent(`
            <ul>
                <li>Components, JSX & Props</li>
                <li>State</li>
                <li>Hooks (e.g., useEffect())</li>
                <li>Dynamic rendering</li>
            </ul>`
    )});

    button3.addEventListener('click', () => {
        updateDivContent(`
            <ul>
                <li>Official web page (react.dev)</li>
                <li>Next.js (Fullstack framework)</li>
                <li>React Native (build native mobile apps with React)</li>
            </ul>`
    )});

    function updateDivContent(newContent, button) {
        let currentDiv = resultsContainer.querySelector('.newDiv')
        if(!currentDiv) {
            currentDiv = document.createElement('div')
            currentDiv.classList.add('newDiv');
            resultsContainer.appendChild(currentDiv)
        }
        currentDiv.innerHTML = newContent;

        button.disabled = true;
    }
})