import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import Slider from './Slider';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      image: '/src/assets/Project/project1.webp',
      title: t('projects.financial'),
      link: 'https://evgenvelichko.github.io/The-Money/',
    },
    {
      id: 2,
      image: '/src/assets/Project/project2.webp',
      title: t('projects.auto'),
      link: 'https://evgenvelichko.github.io/Products_Maket/',
    },
    {
      id: 3,
      image: '/src/assets/Project/project3.webp',
      title: t('projects.music'),
      link: 'https://evgenvelichko.github.io/AudioPlayer/',
    },
  ];

  return (
    <section className="slider-section" id="projects">
      <h2 className="section-heading" data-aos="slide-right" data-aos-duration="1000">
        {t('sections.projects')}
      </h2>
      <Slider items={projects} type="project" />
    </section>
  );
};

export default Projects;