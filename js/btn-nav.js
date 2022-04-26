const botonNav = document.getElementById("btn-nav-container");
const contenedorNav = document.querySelector(".ul-container");
const links = contenedorNav.getElementsByTagName("li");

function cambiarMenuToggle() {
    botonNav.classList.toggle("cerrar");
    contenedorNav.classList.toggle("abierto");
    // botonNav.addEventListener('click', cambiarMenuToggle);
}
function esconderAlApretarLink() {
    if (botonNav.classList.contains("cerrar") && contenedorNav.classList.contains("abierto")) {
    botonNav.classList.remove("cerrar");
    contenedorNav.classList.remove("abierto");
    }
}

// addEventListener('click', cambiarMenuToggle);