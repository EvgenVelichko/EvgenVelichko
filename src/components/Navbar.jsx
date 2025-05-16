import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isLangMenuActive, setIsLangMenuActive] = useState(false);
  const { t, changeLanguage } = useTranslation();

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const toggleLangMenu = () => {
    setIsLangMenuActive(!isLangMenuActive);
  };

  return (
    <nav>
      <div className="nav-content">
        <img src="/src/assets/logo.webp" alt="EV Logo" className="logo" />
        <div className={`nav-links ${isNavActive ? 'active' : ''}`}>
          <a href="#home" className="button">{t('nav.home')}</a>
          <a href="#about" className="button">{t('nav.about')}</a>
          <a href="#certificates" className="button">{t('nav.certificates')}</a>
          <a href="#projects" className="button">{t('nav.projects')}</a>
          <a href="#contact" className="button">{t('nav.contact')}</a>
        </div>
        <div className="burger" onClick={toggleNav}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="lang-burger" onClick={toggleLangMenu}>
          <i className="fas fa-globe"></i>
        </div>
        <div className={`lang-menu ${isLangMenuActive ? 'active' : ''}`}>
          <a href="#" data-lang="ua" className="button" onClick={() => changeLanguage('ua')}>
            Українська
          </a>
          <a href="#" data-lang="en" className="button" onClick={() => changeLanguage('en')}>
            English
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;