// Language Switcher
const langOptions = document.querySelectorAll('.language-option');
langOptions.forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.getAttribute('data-lang');
   
    alert(`Language switched to: ${lang}`);
  });
});

// Slider
const slides = document.querySelector('.slides');
const slideCount = slides.childElementCount;
let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector('.prev-slide').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  showSlide(currentIndex);
});

document.querySelector('.next-slide').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  showSlide(currentIndex);
});


const birthYear = 1990;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
document.querySelector('.age-calculation').innerText = `Your age is: ${age}`;

