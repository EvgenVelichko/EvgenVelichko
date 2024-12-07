AOS.init({
    duration: 1000,
    once: true
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function initializeSlider(slider) {
    const track = slider.querySelector('.slider-track');
    const items = slider.querySelectorAll('.slider-item');
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    let position = 0;
    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);

    prev?.addEventListener('click', () => {
        position += itemWidth;
        if (position > 0) position = -(items.length - 1) * itemWidth;
        track.style.transform = `translateX(${position}px)`;
    });

    next?.addEventListener('click', () => {
        position -= itemWidth;
        if (position < -(items.length - 1) * itemWidth) position = 0;
        track.style.transform = `translateX(${position}px)`;
    });
}

document.querySelectorAll('.slider').forEach(initializeSlider);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Calculate age automatically
function updateAge() {
    const birthDate = new Date('2011-09-05'); 
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById('age').textContent = age;
}

updateAge();
setInterval(updateAge, 1000 * 60 * 60 * 24); // 