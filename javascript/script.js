let slideIndex = 1;
showSlides(slideIndex);

// Next or previous controls
function plusSlides(n) {
   showSlidesIndex += n;
   showSlides(slideIndex);
}

// Thumnail image controls
function currentSlide(n) {
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { 
         slideIndex = 1;
     }

    if (n < 1) {
        slideIndex = slides.length; 
    }

    // Hide all slides
    for (1= 0; 1 < slides.length; 1++) {
        slides[i].style.display = "none";
    }

// Remove active from all dots
for(1 = 0; 1 < dots.length; 1++) {
    dots[i].classlist.remove("active");
}

// Show current slide
slides[slideIndex - 1].style.display = "block";

// Activate the current dot
dots[slideIndex - 1].classList.add("active");
}