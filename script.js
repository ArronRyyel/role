let currentIndex = 0; 
const items = document.querySelectorAll('.item');
const carouselContainer = document.querySelector('.carousel-container');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'previous', 'next');
        
        if (index === currentIndex) {
            item.classList.add('active'); 
            
            const bgImage = item.style.backgroundImage;
            carouselContainer.style.backgroundImage = bgImage;
            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');
            titleElement.textContent = title;
            descriptionElement.textContent = description;
        } 
    });
}
function nextSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length; 
    updateCarousel();
}
function prevSlide() {
    currentIndex = (currentIndex + 1) % items.length; 
    updateCarousel();
}
updateCarousel();