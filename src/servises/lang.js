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
            certificates: 'Мої дипломи',
            projects: 'Проєкти',
            contact: 'Контакти',
        },
        hero: {
            greeting: 'Вітаю, я',
            name: 'Євгеній.',
            description:
                'Створюю сучасні веб-рішення з фокусом на користувацький досвід та продуктивність.',
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
            contact: 'Контакти',
        },
        certificates: {
            cert1: 'Диплом 1',
            cert2: 'Диплом 2',
            cert3: 'Диплом 3',
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
            certificates: 'My Certificates',
            projects: 'Projects',
            contact: 'Contact',
        },
        hero: {
            greeting: "Hello, I'm",
            name: 'Evgen.',
            description:
                'Creating modern web solutions focused on user experience and performance.',
        },
        about: {
            title: 'About Me',
            intro: "My name is Evgen Velychko, I'm",
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
            contact: 'Contact',
        },
        certificates: {
            cert1: 'Certificate 1',
            cert2: 'Certificate 2',
            cert3: 'Certificate 3',
        },
        projects: {
            financial: 'Financial Portal',
            auto: 'Automotive Blog',
            music: 'Music Player',
        },
    },
};

function changeLanguage(lang) {
    // Update navigation links
    document.querySelector('a[href="#home"]').textContent =
        translations[lang].nav.home;
    document.querySelector('a[href="#about"]').textContent =
        translations[lang].nav.about;
    document.querySelector('a[href="#certificates"]').textContent =
        translations[lang].nav.certificates;
    document.querySelector('a[href="#projects"]').textContent =
        translations[lang].nav.projects;
    document.querySelector('a[href="#contact"]').textContent =
        translations[lang].nav.contact;

    const heroText = document.querySelector('.hero-text h1');
    heroText.innerHTML = `${translations[lang].hero.greeting} <span>${translations[lang].hero.name}</span>`;
    document.querySelector('.hero-text p').textContent =
        translations[lang].hero.description;

    document.querySelector('#about .section-heading').textContent =
        translations[lang].about.title;
    const aboutText = document.querySelector('.about-text p');
    aboutText.innerHTML = `${translations[lang].about.intro} <span id="age">${
        document.getElementById('age').textContent
    }</span> ${translations[lang].about.years}. ${
        translations[lang].about.location
    }. ${translations[lang].about.description}`;

    document.querySelector('.about-text h3').textContent =
        translations[lang].about.skills;

    const skillsList = document.querySelectorAll('.skills-list li');
    skillsList[0].textContent = translations[lang].about.skillsList.html;
    skillsList[1].textContent = translations[lang].about.skillsList.js;
    skillsList[2].textContent = translations[lang].about.skillsList.projects;

    document.querySelector('#certificates .section-heading').textContent =
        translations[lang].sections.certificates;

    const certificateItems = document.querySelectorAll(
        '#certificates .slider-item',
    );
    certificateItems[0].textContent = translations[lang].certificates.cert1;
    certificateItems[1].textContent = translations[lang].certificates.cert2;
    certificateItems[2].textContent = translations[lang].certificates.cert3;

    document.querySelector('#projects .section-heading').textContent =
        translations[lang].sections.projects;
    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles[0].textContent = translations[lang].projects.financial;
    projectTitles[1].textContent = translations[lang].projects.auto;
    projectTitles[2].textContent = translations[lang].projects.music;

    document.querySelector('#contact .section-heading').textContent =
        translations[lang].sections.contact;

    document.querySelector('.lang-menu').classList.remove('active');
}

document.querySelectorAll('.lang-menu a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const lang = e.target.dataset.lang;
        changeLanguage(lang);
    });
});
