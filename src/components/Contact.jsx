import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-heading" data-aos="slide-right" data-aos-duration="1000">
        {t('sections.contact')}
      </h2>
      <div className="contact-content">
        <div className="contact-icons">
          <a href="https://github.com/EvgenVelichko" target="_blank" aria-label="Github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/evgen-velichko-755527338/" target="_blank" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:evgenvelicko4@email.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://t.me/EvgenVelicko" target="_blank" aria-label="Telegram">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;