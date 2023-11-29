let slideIndex = 0;
const slides = document.getElementsByClassName("slides");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1); // Change image every 6 seconds (6000 milliseconds)
}

showSlides(); // Initial call to start the slideshow