// Ensure DOM is loaded before interacting with elements
document.addEventListener("DOMContentLoaded", () => {
    // Scroll to Top Button
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    // Show or hide the button based on scroll position
    window.onscroll = () => {
        if (window.scrollY > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    };

    // Smooth scroll to the top
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Slider Functionality
    const slider = document.querySelector('.slider');
    if (slider) {
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const slides = Array.from(slider.querySelectorAll('img'));
        const slideCount = slides.length;
        let slideIndex = 0;

        // Event listeners for slider buttons
        prevButton.addEventListener('click', showPreviousSlide);
        nextButton.addEventListener('click', showNextSlide);

        function showPreviousSlide() {
            slideIndex = (slideIndex - 1 + slideCount) % slideCount;
            updateSlider();
        }

        function showNextSlide() {
            slideIndex = (slideIndex + 1) % slideCount;
            updateSlider();
        }

        function updateSlider() {
            slides.forEach((slide, index) => {
                slide.style.display = index === slideIndex ? 'block' : 'none';
            });
        }

        // Initialize the slider
        updateSlider();
    }
});