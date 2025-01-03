/** @format */

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const langBurger = document.querySelector('.lang-burger');
const langMenu = document.querySelector('.lang-menu');

langBurger.addEventListener('click', () => {
    langMenu.style.display = 'flex';

    requestAnimationFrame(() => {
        langMenu.classList.toggle('active');
    });
});

document.addEventListener('click', e => {
    if (!langBurger.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove('active');
        // Wait for transition to complete before hiding
        setTimeout(() => {
            if (!langMenu.classList.contains('active')) {
                langMenu.style.display = 'none';
            }
        }, 300);
    }
});

const translations = {
    ua: {
        nav: {
            home: 'Головна',
            about: 'Про мене',
            certificates: 'Дипломи',
            projects: 'Проєкти',
            contact: 'Контакти',
        },
        hero: {
            greeting: 'Вітаю, я',
            name: 'Євген',
            description:
                'Створюю сучасні веб-рішення з фокусом на користувацький досвід та продуктивність',
        },
        about: {
            title: 'Про мене',
            intro: 'Мене звати Величко Євген, мені',
            years: 'років',
            location: 'Я живу в Україні',
            description:
                'Я студент із веб-розробки, але в мене вже є деякі навички та проєкти, якими я хочу поділитися з вами.',
            skills: 'Мої навички:',
            skillsList: {
                html: 'HTML і CSS: можу створювати базові веб-сторінки за допомогою HTML і CSS, додаючи стилі і структуру.',
                js: 'JavaScript: почав вивчати JavaScript, щоб додати інтерактивність до веб-сторінок.',
                projects:
                    'Проєкти: Працюю над різними проєктами для вдосконалення моїх навичок і створення корисних речей.',
            },
        },
        sections: {
            certificates: 'Мої дипломи',
            projects: 'Мої проєкти',
        },
        projects: {
            financial: 'Фінансовий портал',
            auto: 'Автомобільний блог',
            music: 'Музичний плеєр',
        },
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            certificates: 'Certificates',
            projects: 'Projects',
            contact: 'Contact',
        },
        hero: {
            greeting: "Hi, I'm",
            name: 'Eugene',
            description:
                'Creating modern web solutions focused on user experience and performance',
        },
        about: {
            title: 'About Me',
            intro: "My name is Eugene Velychko, I'm",
            years: 'years old',
            location: 'I live in Ukraine',
            description:
                "I'm a web development student, but I already have some skills and projects that I want to share with you.",
            skills: 'My Skills:',
            skillsList: {
                html: 'HTML & CSS: I can create basic web pages using HTML and CSS, adding styles and structure.',
                js: 'JavaScript: Started learning JavaScript to add interactivity to web pages.',
                projects:
                    'Projects: Working on various projects to improve my skills and create useful things.',
            },
        },
        sections: {
            certificates: 'My Certificates',
            projects: 'My Projects',
        },
        projects: {
            financial: 'Financial Portal',
            auto: 'Automotive Blog',
            music: 'Music Player',
        },
    },
};
