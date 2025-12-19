const professores = [
    "Franciel Amorim",
    "Miranilde Oliveira",
    "Samuel da Luz",
    "Wilson Luna",
    "James Jesuíno",
    "Diego da Silva"
];

const professorElemento = document.getElementById("professor");
let indexProfessor = 0;

function mostrarProfessor() {
    professorElemento.style.transform = "translateY(40px)";
    professorElemento.style.opacity = "0";

    professorElemento.textContent = professores[indexProfessor];

    professorElemento.getBoundingClientRect();

    professorElemento.style.transform = "translateY(0)";
    professorElemento.style.opacity = "1";

    setTimeout(() => {
        professorElemento.style.opacity = "0";
    }, 2000);

    indexProfessor = (indexProfessor + 1) % professores.length;
}

mostrarProfessor();
setInterval(mostrarProfessor, 3000);

