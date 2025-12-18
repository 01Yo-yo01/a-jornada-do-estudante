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
    // Reset
    professorElemento.style.bottom = "-40px";
    professorElemento.style.opacity = "0";

    // Troca o texto
    professorElemento.textContent = professores[indexProfessor];

    // Reinicia animação
    void professorElemento.offsetWidth;

    // Sobe e aparece
    professorElemento.style.bottom = "10px";
    professorElemento.style.opacity = "1";

    // Some depois
    setTimeout(() => {
        professorElemento.style.opacity = "0";
    }, 2000);

    indexProfessor = (indexProfessor + 1) % professores.length;
}

mostrarProfessor();
setInterval(mostrarProfessor, 3000);
