/** @format */

import React from 'react';
import '../styles/components/projects.scss';


const Projects = () => {
    const projects = [
        {
            link: 'https://evgenvelichko.github.io/The-Money/',
            imgSrc: './assets/Project/project1.webp',
            title: 'Фінансовий портал',
            alt: 'Money Main Page',
        },
        {
            link: 'https://evgenvelichko.github.io/Products_Market/',
            imgSrc: './assets/Project/project2.webp',
            title: 'Автомобільний блог',
            alt: 'Ford Mustang Website',
        },
        {
            link: 'https://evgenvelichko.github.io/AudioPlayer/',
            imgSrc: './assets/Project/project3.webp',
            title: 'Аудіоплеєр',
            alt: 'Audio Player',
        },
    ];

    return (
        <section className="slider-section" id="projects">
            <h2>Мої проєкти</h2>
            <div className="slider">
                {projects.map((project, index) => (
                    <a
                        href={project.link}
                        className="slider-item"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}>
                        <img src={project.imgSrc} alt={project.alt} />
                        <div className="project-title">{project.title}</div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
