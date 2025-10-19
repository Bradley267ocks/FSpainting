// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.background = 'var(--primary)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'var(--primary-rgba)';
        header.style.padding = '15px 0';
    }
});

// Fade In Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
// Initial check in case elements are already in view
fadeInOnScroll();

// WhatsApp Form Submission
document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    let text = `Hello FS Painting,%0A%0A`;
    text += `I would like to request a quote for painting services.%0A%0A`;
    text += `Name: ${name}%0A`;
    text += `Phone: ${phone}%0A`;
    if (email) text += `Email: ${email}%0A`;
    if (service) text += `Service: ${service}%0A`;
    if (message) text += `Project Details: ${message}%0A`;
    
    window.open(`https://wa.me/27742301873?text=${text}`, '_blank');
});

// Testimonial Slider Auto Scroll
let testimonialSlider = document.querySelector('.testimonials-slider');
let scrollAmount = 0;
let scrollPerClick = document.querySelector('.testimonial-card').offsetWidth + 30;

function autoScrollTestimonials() {
    if (scrollAmount < testimonialSlider.scrollWidth - testimonialSlider.clientWidth) {
        scrollAmount += scrollPerClick;
    } else {
        scrollAmount = 0;
    }
    testimonialSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Auto scroll every 5 seconds
setInterval(autoScrollTestimonials, 5000);

// Hero Slider
const heroSlides = document.querySelectorAll('.hero-slider .slide');
const heroDots = document.querySelectorAll('.nav-dot');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroDots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + heroSlides.length) % heroSlides.length;
    
    heroSlides[currentSlide].classList.add('active');
    heroDots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listeners for hero slider
nextArrow.addEventListener('click', () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
});

prevArrow.addEventListener('click', () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
});

heroDots.forEach(dot => {
    dot.addEventListener('click', function() {
        stopSlideShow();
        showSlide(parseInt(this.getAttribute('data-slide')));
        startSlideShow();
    });
});

// Start the hero slider
startSlideShow();

// Service Sliders
const serviceSliders = document.querySelectorAll('.service-slider');

serviceSliders.forEach(slider => {
    const slides = slider.querySelectorAll('.service-slide');
    let currentServiceSlide = 0;
    
    function showServiceSlide(sliderIndex, n) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        currentServiceSlide = (n + slides.length) % slides.length;
        slides[currentServiceSlide].classList.add('active');
    }
    
    // Auto cycle service images
    setInterval(() => {
        showServiceSlide(0, currentServiceSlide + 1);
    }, 3000);
    
    // Start with first slide active
    showServiceSlide(0, 0);
});

// Pause hero slider when hovering
const heroSlider = document.querySelector('.hero-slider');
heroSlider.addEventListener('mouseenter', stopSlideShow);
heroSlider.addEventListener('mouseleave', startSlideShow);

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});