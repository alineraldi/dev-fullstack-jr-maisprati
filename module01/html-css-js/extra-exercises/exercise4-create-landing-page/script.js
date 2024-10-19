document.addEventListener('DOMContentLoaded', () => {
    var Swipes = new Swiper('.swiper-container', {
        loop: true,
        speed: 600, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, 
        },
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
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
                behavior: 'smooth' 
            });
        });
    });


    let userFeedback = [
        "a galeria surucuá é a melhor galeria colaborativa que já vi... na verdade, a única! é uma das melhores comunidades por aí, sem dúvida!",
        "eu absolutamente amo como é fácil mostrar minha arte aqui. a comunidade é incrível!",
        "surucuá é a plataforma perfeita para artistas se conectarem e colaborarem. encontrei tanta inspiração!"
    ];

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
    .catch(error => console.error("houve um erro ao carregar so feedbacks: ", error));


    AOS.init();


    (function() {
        emailjs.init("N6ynFm-c4GEH5X61c");
    })();

    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    function validateField(field, errorElement, message) {
        if (field.checkValidity()) {
            field.style.borderColor = 'black';
            errorElement.style.display = 'none';
            return true;
        } else {
            field.style.borderColor = 'red';
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            return false;
        }
    }

    nameInput.addEventListener('blur', () => validateField(nameInput, nameError, 'insira um nome válido'));
    emailInput.addEventListener('blur', () => validateField(emailInput, emailError, 'insira um e-mail válido'));
    phoneInput.addEventListener('blur', () => validateField(phoneInput, phoneError, 'insira um telefone válido'));
    messageInput.addEventListener('blur', () => validateField(messageInput, messageError, 'insira uma mensagem'));

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        emailjs.sendForm('service_f7zcmcr', 'template_61qmat8', form)
            .then(() => {
                alert("mensagem enviada! retornaremos em breve.");
                form.reset();
            }, (error) => {
                alert("erro ao enviar a mensagem: " + JSON.stringify(error));
            });
        }
    )});
