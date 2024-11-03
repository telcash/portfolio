import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { SocialMedia } from '../../ui';
import logo from '../../../assets/logo.png';
import './navbar.css';

const NavBar = ({ scrollToSection, currentIndex }) => {

  const [t, i18next] = useTranslation("global");
  const sections = [t("navbar.home"), t("navbar.frontend"), t("navbar.backend"), t("navbar.portfolio"), t("navbar.contact")];
  const [es, setEs] = useState(true);

  const setLanguage = (language) => {
    i18next.changeLanguage(language);
    setEs(language === 'es');
  }

  return (
    <div className='navbar'>
      <div className={`navbar-logo ${currentIndex === 0 ? "disable" : ""}`}>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar-buttons'>
        <div className='navbar-language-options'>
          <div className={`${es ? "active" : ""}`} onClick={() => setLanguage('es')}>ES</div>
          <div className={`${!es ? "active" : ""}`} onClick={() => setLanguage('en')}>EN</div>
        </div>
        {sections.map((section, index) => (
          <button
            className={`navbar-button ${currentIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => scrollToSection(index)}
          >
            <span className={`navbar-button-sub ${currentIndex === index ? "active" : ""}`}>{section}</span>
          </button>
        ))}
        <SocialMedia />
      </div>
    </div>
  );
};

export default NavBar;