const botonNav = document.getElementById("btn-nav-container");
const contenedorNav = document.querySelector(".ul-container");

function cambiarMenuToggle() {
    botonNav.classList.toggle("cerrar");
    contenedorNav.classList.toggle("abierto");
}

addEventListener('click', cambiarMenuToggle);