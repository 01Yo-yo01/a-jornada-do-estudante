// seleciona todos os elementos que devem animar no scroll
const elementos = document.querySelectorAll('.animar-scroll');

function animarNoScroll() {
    elementos.forEach(el => {
        const topoElemento = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.8;

        if (topoElemento < alturaTela) {
            el.classList.add('ativo');
        }
    });
}

// executa ao carregar
window.addEventListener('load', animarNoScroll);

// executa ao rolar
window.addEventListener('scroll', animarNoScroll);
