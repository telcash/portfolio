import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { SocialMedia } from '../../ui';
import logo from '../../../assets/logo.png';
import './navbar.css';

const NavBar = ({ scrollToSection, currentIndex }) => {
  const [t, i18next] = useTranslation("global");
  const sections = [t("navbar.home"), t("navbar.frontend"), t("navbar.backend"), t("navbar.portfolio"), t("navbar.contact")];
  const [language, setLanguage] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageClick = (language) => {
    i18next.changeLanguage(language);
    setLanguage(language);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className={`navbar-logo ${currentIndex === 0 ? "disable" : ""}`}>
        <img src={logo} alt='logo' />
      </div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
          {menuOpen ? <span>x</span> : <span>☰</span>}
      </div>

      <div className={`navbar-sidebar ${menuOpen ? "open" : ""}`}>
        {sections.map((section, index) => (
          <button
            className={`navbar-button ${currentIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => {
              scrollToSection(index);
              setMenuOpen(false);
            }}
          >
            <span className={`navbar-button-sub ${currentIndex === index ? "active" : ""}`}>{section}</span>
          </button>
        ))}
      </div>

      {/* Regular Navbar for Desktop */}
      <div className='navbar-buttons'>
        <div className='navbar-language-options'>
          <div className={`${ language === 'es' ? "active" : ""}`} onClick={() => handleLanguageClick('es')}>ES</div>
          <div className={`${ language === 'en' ? "active" : ""}`} onClick={() => handleLanguageClick('en')}>EN</div>
        </div>

        {sections.map((section, index) => (
          <button
            className={`navbar-button desktop ${currentIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => scrollToSection(index)}
          >
            <span className={`navbar-button-sub ${currentIndex === index ? "active" : ""}`}>{section}</span>
          </button>
        ))}

        <SocialMedia language={language}/>
      </div>
    </div>
  );
};

export default NavBar;
