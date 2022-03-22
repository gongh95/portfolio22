let animado = document.querySelector(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    // let alturaAnimado = animado.offsetTop;
    if (scrollTop > 150) {
        animado.classList.toggle("animado-desvanecer");
    }

    // for (var i=0; i < animado.length; i++) {
    //     let alturaAnimado = animado[i].offsetTop;
    //     if (alturaAnimado - 850 < scrollTop) {
    //         // animado[i].style.opacity = 0;
    //         animado[i].classList.toggle("animado-desvanecer");
    //     }
        // else {
        //     animado[i].classList.remove("animado-desvanecer");
        // }
    // }
}

// document.onload = mostrarScroll();
// window.onload(mostrarScroll());
window.addEventListener("scroll", mostrarScroll);