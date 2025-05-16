import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const { t } = useTranslation();
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2011-09-05');
      const today = new Date();
      let currentAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        currentAge--;
      }

      setAge(currentAge);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section" id="about">
      <h2 className="section-heading" data-aos="slide-right" data-aos-duration="1000">
        {t('about.title')}
      </h2>
      <div className="about-content" data-aos="fade-up">
        <div className="about-text">
          <p>
            {t('about.intro')} <span id="age">{age}</span> {t('about.years')}. {t('about.location')}. {t('about.description')}
          </p>
          <div className="skills">
            <h3>{t('about.skills')}</h3>
          </div>
          <ul className="skills-list">
            <li>{t('about.skillsList.html')}</li>
            <li>{t('about.skillsList.js')}</li>
            <li>{t('about.skillsList.projects')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;