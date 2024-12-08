/** @format */

function initializeSlider(slider) {
    const track = slider.querySelector('.slider-track');
    const items = slider.querySelectorAll('.slider-item');
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    let position = 0;
    const itemWidth =
        items[0].offsetWidth +
        parseInt(window.getComputedStyle(items[0]).marginRight);

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
            behavior: 'smooth',
        });
    });
});
