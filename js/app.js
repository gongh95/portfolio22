const subToggle = document.querySelector(".sub-toggle"),
    textoEscondido = document.querySelectorAll(".hidden");

subToggle.addEventListener('click', () => {
    for (let i = 0; i < textoEscondido.length; i++) {
    textoEscondido[i].classList.toggle("hidden");
    }
})
