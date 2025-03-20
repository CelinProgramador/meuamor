// Data de início do namoro
const inicioNamoro = new Date("2024-07-23T22:17:00");

// Função para atualizar o contador
function atualizarContador() {
    const agora = new Date();
    const diff = agora - inicioNamoro;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("contador").textContent = 
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();

// Carrossel de fotos
const fotos = [
    "fotos/foto1.jpg", "fotos/foto2.jpg", "fotos/foto3.jpg",
    "fotos/foto4.jpg", "fotos/foto5.jpg", "fotos/foto6.jpg",
    "fotos/foto7.jpg", "fotos/foto8.jpg"
];
let indexFoto = 0;

document.getElementById("prev").addEventListener("click", () => {
    indexFoto = (indexFoto - 1 + fotos.length) % fotos.length;
    document.getElementById("carousel-img").src = fotos[indexFoto];
});

document.getElementById("next").addEventListener("click", () => {
    indexFoto = (indexFoto + 1) % fotos.length;
    document.getElementById("carousel-img").src = fotos[indexFoto];
});
