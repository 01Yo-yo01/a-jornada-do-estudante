const nomes = [
    "Lucas Gomes",
    "Adila N. Moraes",
    "Ágatha Assunção",
    "Yasmim Pantoja",
    "Carlos Eduardo",
    "Antonio Vinicius",
    "Pedro Henrique",
    "Iuri de Matos",
    "Pedro Henrique",
    "João Paplo",
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
    // Reset (desce e esconde)
    nomeElemento.style.bottom = "-40px";
    nomeElemento.style.opacity = "0";

    // Troca o texto
    nomeElemento.textContent = nomes[index];

    // Força o reflow (reinicia animação)
    void nomeElemento.offsetWidth;

    // Sobe e aparece
    nomeElemento.style.bottom = "10px";
    nomeElemento.style.opacity = "1";

    // Some depois de 2s
    setTimeout(() => {
        nomeElemento.style.opacity = "0";
    }, 2000);

    index = (index + 1) % nomes.length;
}

// Inicia
mostrarNome();
setInterval(mostrarNome, 3000);
