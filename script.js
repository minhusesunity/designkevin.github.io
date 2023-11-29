// script.js

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show the current slide and hide others with a fading effect
function showSlide(index) {
  slides.forEach(slide => {
    slide.style.opacity = 0;
    slide.style.transition = 'opacity 1s ease-in-out';
    slide.style.position = 'absolute';
    slide.style.left = '50%';
    slide.style.transform = 'translateX(-50%)';
  });

  slides[index].style.opacity = 1;
}

// Function to transition to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Call the function to show the initial slide and start transitioning
showSlide(currentSlide);
setInterval(nextSlide, 1000); // Change slide every 6 seconds
