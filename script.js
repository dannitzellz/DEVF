const datosPatos = [
    "Los patos pueden dormir con un ojo abierto.",
    "Los patos tienen plumas impermeables.",
    "Pueden girar la cabeza casi al revés.",
    "Los patos vuelan hasta 90 km/h.",
    "Los patitos siguen a quien vean primero."
];

function mostrarDato() {
    let p = document.getElementById("dato");
    let random = Math.floor(Math.random() * datosPatos.length);

    p.style.opacity = 0;
    setTimeout(() => {
        p.textContent = datosPatos[random];
        p.style.opacity = 1;
    }, 200);
}


document.body.addEventListener("click", () => {
    document.getElementById("cuacAudio").play();
});


let slideIndex = 0;
const slides = document.querySelector(".slides");

function cambiarSlide(n) {
    slideIndex += n;
    const total = slides.children.length;

    if (slideIndex < 0) slideIndex = total - 1;
    if (slideIndex >= total) slideIndex = 0;

    slides.style.transform = `translateX(${-slideIndex * 420}px)`;
}

setInterval(() => cambiarSlide(1), 3000);


let puntos = 0;
const patoJuego = document.getElementById("patoJuego");
const caja = document.getElementById("juegoArea");

patoJuego.addEventListener("click", () => {
    puntos++;
    document.getElementById("puntos").textContent = "Puntos: " + puntos;
});

function moverPato() {
    const x = Math.random() * (caja.clientWidth - 80);
    const y = Math.random() * (caja.clientHeight - 80);
    patoJuego.style.left = x + "px";
    patoJuego.style.top = y + "px";
}

setInterval(moverPato, 900);


function animarTitulo() {
    const t1 = document.getElementById("t1");
    const t2 = document.getElementById("t2");
    const t3 = document.getElementById("t3");

    // Reiniciar estado
    t2.style.opacity = 0;
    t3.style.opacity = 0;
    t2.style.transform = "scale(0.5)";
    t3.style.transform = "scale(0.5)";

    // Secuencia
    setTimeout(() => {
        t2.style.animation = "cuackZoom 0.4s forwards";
    }, 500);

    setTimeout(() => {
        t3.style.animation = "cuackZoom 0.4s forwards";
    }, 900);
}

setInterval(animarTitulo, 2);


function enviarFormulario(event) {
    event.preventDefault(); 
    document.getElementById('form-adopcion').style.display = 'none';

    document.getElementById('mensaje-confirmacion').style.display = 'block';

}
