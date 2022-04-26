let slider = document.querySelector(".habilidades");
let elemento = document.getElementsByTagName("svg");

function moverSlider() {
    slider.classList.add("slider-automatico");
}
function agregarUltimoElementoAlPrincipio() {
    console.log(elemento);
    console.log(elemento.length);
    for (let elementos of elemento) {
        console.log(elementos);
        let elementoCopiado = elemento.cloneNode(true);

    }
    console.log(elementoCopiado);
}

window.onload = moverSlider();