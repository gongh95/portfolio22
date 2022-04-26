const slider = document.querySelector(".habilidades");
let sliderIcon = document.getElementsByTagName("svg");
let sliderIconUltimo = sliderIcon[sliderIcon.length -1];


function ultimoAPrimero() {
    for (let i = 0; i < 6; i++) {
        slider.insertAdjacentElement("afterbegin", sliderIconUltimo);
        sliderIconUltimo = sliderIcon[i];
        
    }
    for (let icon of sliderIcon) {

    }
}


function moverSlider() {
    slider.insertAdjacentElement("afterbegin", sliderIconUltimo);
    let sliderIconPrimero = document.getElementsByTagName("svg")[0];
    // sliderIconUltimo = sliderIcon[sliderIcon.length -1];
    sliderIconUltimo = sliderIcon[-1];
    for (let icon of sliderIcon) {
        setTimeout(function() {
        slider.insertAdjacentElement("beforeend", sliderIconPrimero);
    }, 500);
    }
    
    
    // slider.style.marginLeft = "-100%";
    // slider.style.transition = "all 10s infinite";
        // function() {
        // slider.style.transition = "all 1s infinite";
        // slider.insertAdjacentElement("beforeend", sliderIconPrimero);
        // slider.style.marginLeft = "-50%";
    };
    
    

addEventListener('click', moverSlider);
// setInterval(moverSlider(), 5000);