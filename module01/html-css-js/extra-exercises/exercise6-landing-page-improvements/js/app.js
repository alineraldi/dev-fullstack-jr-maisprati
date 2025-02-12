function openModal1() {
    document.getElementById("purchaseModal1").style.display="block";
}

function closeModal1() {
    document.getElementById("purchaseModal1").style.display="none";
}

function openModal2() {
    document.getElementById("purchaseModal2").style.display="block";
}

function closeModal2() {
    document.getElementById("purchaseModal2").style.display="none";
}

function openModal3() {
    document.getElementById("purchaseModal3").style.display="block";
}

function closeModal3() {
    document.getElementById("purchaseModal3").style.display="none";
}

document.addEventListener('DOMContentLoaded', () => {
    let swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // Evento de tecla para navegação
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if (event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    });

    const gameInput = document.getElementById('gameInput');

    gameInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            let searchGame = gameInput.value.trim().toUpperCase();

            switch (searchGame) {
                case 'MARIO':
                    swiper.slideTo(0); // mudado para 0 porque os índices começam em 0
                    break;
                case 'POKEMON':
                    swiper.slideTo(1); // mudado para 1 porque o Pokémon está no índice 1
                    break;
                case 'ZELDA':
                    swiper.slideTo(2);
                    break
                default:
                    alert("Jogo não foi encontrado");
                    break;
            }
        }
    });

    window.onclick = function(event) {
        const modal = document.getElementById("purchaseModal1");
        if(event.target == modal) {
            modal.style.display = "none";
        }
    }
});
