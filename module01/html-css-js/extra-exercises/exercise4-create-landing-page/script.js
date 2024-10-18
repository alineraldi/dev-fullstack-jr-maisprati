document.addEventListener('DOMContentLoaded', () => {
var Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: 'smooth' // Para um efeito de rolagem suave
            });
        });
    });

// API: Feedback part

let userFeedback = [
    "a galeria surucuá é a melhor galeria colaborativa que já vi... na verdade, a única! é uma das melhores comunidades por aí, sem dúvida!",
    "eu absolutamente amo como é fácil mostrar minha arte aqui. a comunidade é incrível!",
    "surucuá é a plataforma perfeita para artistas se conectarem e colaborarem. encontrei tanta inspiração!"
]

Promise.all([
    fetch('https://randomuser.me/api/'),
    fetch('https://randomuser.me/api/'),
    fetch('https://randomuser.me/api/')
])
 .then(responses => {
    responses.forEach(response => {
            if (!response.ok) {
                throw new Error("Network response wasn't ok.");
            }
        });
        return Promise.all(responses.map(response => response.json()));
 })
    .then(dataArray => {
        const feedbackContainer = document.getElementById('feedback-container');
        feedbackContainer.innerHTML = '';

        dataArray.forEach((data, index) => {
            const user = data.results[0];
            const feedbackCard = document.createElement('div');
            feedbackCard.dataset.aos = 'fade-up';
            feedbackCard.className = 'feedback-card';
            feedbackCard.innerHTML = `
                <img src="${user.picture.thumbnail}">
                <h3>${user.name.first}</h3>
                <p>${user.email}</p>
                <p>"${userFeedback[index]}"</p>
            `;
            feedbackContainer.appendChild(feedbackCard); 
        });
    })
    .catch(error => console.error("There was an error loading feedbacks: ", error))
});


// AOS.js
AOS.init()