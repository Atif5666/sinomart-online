// Slideshow Functionality
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName('slide');
    
    if (slides.length === 0) return;
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    // Increment slide index
    slideIndex++;
    
    // Wrap around to first slide if necessary
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display current slide
    slides[slideIndex - 1].style.display = 'block';
    
    // Change image every 5 seconds
    setTimeout(showSlides, 5000);
}

// Start slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}
