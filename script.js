const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('show');
});  

const slider = document.querySelector('.slider');
const product = document.querySelector('.product')
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showSlide(index) {
    const slideWidth = product.clientWidth;
    const newTranslate = -index * slideWidth;
    slider.style.transform = `translateX(${newTranslate}px)`;
    currentIndex = index;
}

function prevSlide() {
    if (currentIndex > 0) {
    showSlide(currentIndex - 1);
    }
}

function nextSlide() {
    const numSlides = document.querySelectorAll('.product').length;
    if (currentIndex < numSlides - 1) {
    showSlide(currentIndex + 1);
    }
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

const searchInput = document.getElementById('searchInput');
function filterProducts() {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const title = product.querySelector('h3').innerText.toLowerCase();
        const description = product.querySelector('.description p').innerText.toLowerCase();

        if ((title.includes(searchInput.value.toLowerCase()) || description.includes(searchInput.value.toLowerCase()))) {
            product.style.display = 'block';
        } else{
            product.style.display = 'none';
        }
    });
}
searchInput.addEventListener('input', filterProducts);