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
    "The surucuá gallery has provided the best collaborative gallery I've ever seen... Actually, the only one! It's one of the best websites out there, word!",
    "I absolutely love how easy it is to showcase my artwork here. The community is amazing!",
    "Surucuá is the perfect platform for artists to connect and collaborate. I've found so much inspiration!"
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
