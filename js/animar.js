let animado = document.querySelector(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 20) {
        animado.classList.add("animado-desvanecer");
    }
    else {
        animado.classList.remove("animado-desvanecer")
    }
}
window.addEventListener("scroll", mostrarScroll);