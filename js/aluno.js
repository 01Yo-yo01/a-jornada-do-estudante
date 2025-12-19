const nomes = [
    "Lucas Gomes",
    "Clara Neves",
    "Adila N. Moraes",
    "Ágatha Assunção",
    "Yasmim Pantoja",
    "Carlos Eduardo",
    "Antonio Vinicius",
    "Pedro Henrique",
    "Iuri de Matos",
    "Pedro Henrique",
    "João Pablo",
    "Hanna Lima",
    "Lucas Freire",
    "Armando D. Ribeiro",
    "Alan Kildere",
    "Esthéfany Ferreira",
    "Aylla Lunara",
    "Kevyn S. Espindola",
    "Sanderson Costa",
    "Allana Maria",
    "Irã Seabra",
    "Maria Leticia",
    "Bianca Oliveira",
    "André Paulo",
    "Dawgan da Silva",
    "Thiago Espindola",
    "Beatriz Ribeiro",
    "Carlos Daniel",
    "Italo Leonardo",
    "João R. Araujo",
    "Pedro Abel",
    "José Victor",
    "Auriane Monteiro",
    "Paulo R. Brito",
    "Jheniffer de N.",
    "Lucas Kensuke"
];

const nomeElemento = document.getElementById("nome");
let index = 0;

function mostrarNome() {
    // RESET
    nomeElemento.style.transform = "translateY(40px)";
    nomeElemento.style.opacity = "0";

    nomeElemento.textContent = nomes[index];

    // força reinício da animação
    nomeElemento.getBoundingClientRect();

    // ENTRA
    nomeElemento.style.transform = "translateY(0)";
    nomeElemento.style.opacity = "1";

    // SAI
    setTimeout(() => {
        nomeElemento.style.opacity = "0";
    }, 2000);

    index = (index + 1) % nomes.length;
}

mostrarNome();
setInterval(mostrarNome, 3000);


