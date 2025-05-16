import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="hero-text" data-aos="slide-right" data-aos-duration="1000">
        <h1>
          {t('hero.greeting')} <span>{t('hero.name')}</span>
        </h1>
        <p>{t('hero.description')}</p>
      </div>
      <div className="profile-photo" data-aos="fade-left">
        <img src="/src/assets/Photo.webp" alt="Profile Photo" />
      </div>
    </section>
  );
};

export default Hero;