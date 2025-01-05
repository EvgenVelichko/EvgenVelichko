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

function initializeMobileSlider(slider) {
    const track = slider.querySelector('.slider-track');
    let startX;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let isDragging = false;
    let startTime;

    function getPositionX(event) {
        return event.type.includes('mouse')
            ? event.pageX
            : event.touches[0].pageX;
    }

    function handleTouchStart(e) {
        isDragging = true;
        startTime = Date.now();
        startX = getPositionX(e);


        const transform = window.getComputedStyle(track).transform;
        const matrix = new DOMMatrix(transform);
        prevTranslate = matrix.m41;

        track.style.transition = 'none';
        track.style.cursor = 'grabbing';
    }

    function handleTouchMove(e) {
        if (!isDragging) return;

        e.preventDefault();
        const currentX = getPositionX(e);
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;


        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    function handleTouchEnd(e) {
        if (!isDragging) return;

        isDragging = false;
        const endTime = Date.now();
        const timeElapsed = endTime - startTime;

        const items = slider.querySelectorAll('.slider-item');
        const itemWidth =
            items[0].offsetWidth +
            parseInt(window.getComputedStyle(items[0]).marginRight);

        const movement = currentTranslate - prevTranslate;
        const velocity = Math.abs(movement / timeElapsed);

        let nextPosition;

        if (Math.abs(movement) > 50 || velocity > 0.5) {
            const direction = movement < 0 ? -1 : 1;
            nextPosition =
                Math.round(
                    (currentTranslate + (direction * itemWidth) / 2) /
                        itemWidth,
                ) * itemWidth;
        } else {
            nextPosition = Math.round(currentTranslate / itemWidth) * itemWidth;
        }

        const maxPosition = 0;
        const minPosition = -((items.length - 1) * itemWidth);
        nextPosition = Math.min(
            maxPosition,
            Math.max(minPosition, nextPosition),
        );

        track.style.transition = 'transform 0.3s ease-out';
        track.style.transform = `translateX(${nextPosition}px)`;
        track.style.cursor = 'grab';


        prevTranslate = nextPosition;
        currentTranslate = nextPosition;
    }

    track.removeEventListener('touchstart', handleTouchStart);
    track.removeEventListener('touchmove', handleTouchMove);
    track.removeEventListener('touchend', handleTouchEnd);
    track.removeEventListener('mousedown', handleTouchStart);
    track.removeEventListener('mousemove', handleTouchMove);
    track.removeEventListener('mouseup', handleTouchEnd);
    track.removeEventListener('mouseleave', handleTouchEnd);


    track.addEventListener('touchstart', handleTouchStart, { passive: false });
    track.addEventListener('touchmove', handleTouchMove, { passive: false });
    track.addEventListener('touchend', handleTouchEnd);

    track.addEventListener('mousedown', handleTouchStart);
    window.addEventListener('mousemove', handleTouchMove);
    window.addEventListener('mouseup', handleTouchEnd);
    window.addEventListener('mouseleave', handleTouchEnd);
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.slider').forEach(initializeMobileSlider);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
