z = 1;
goster(z);

function ileriGeri(n) {
    goster(z += n);
}

function guncelSlide(n) {
    goster(z = n);
}

function goster(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {z = 1}    
    if (n < 1) {z = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[z-1].style.display = "block";  
    dots[z-1].className += " active";
}