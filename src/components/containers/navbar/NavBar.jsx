import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { SocialMedia } from '../../ui';
import logo from '../../../assets/logo.png';
import './navbar.css';

const NavBar = ({ scrollToSection, currentIndex }) => {
  const [t, i18next] = useTranslation("global");
  const sections = [t("navbar.home"), t("navbar.frontend"), t("navbar.backend"), t("navbar.portfolio"), t("navbar.contact")];
  const [es, setEs] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const setLanguage = (language) => {
    i18next.changeLanguage(language);
    setEs(language === 'es');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      {/* Logo */}
      <div className={`navbar-logo ${currentIndex === 0 ? "disable" : ""}`}>
        <img src={logo} alt='logo' />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
          {menuOpen ? <span>x</span> : <span>☰</span>}
      </div>

      {/* Sidebar Menu for Mobile */}
      <div className={`navbar-sidebar ${menuOpen ? "open" : ""}`}>
        {sections.map((section, index) => (
          <button
            className={`navbar-button ${currentIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => {
              scrollToSection(index);
              setMenuOpen(false); // Close the menu after clicking
            }}
          >
            <span className={`navbar-button-sub ${currentIndex === index ? "active" : ""}`}>{section}</span>
          </button>
        ))}
      </div>

      {/* Regular Navbar for Desktop */}
      <div className='navbar-buttons'>
        {/* Language Selection */}
        <div className='navbar-language-options'>
          <div className={`${es ? "active" : ""}`} onClick={() => setLanguage('es')}>ES</div>
          <div className={`${!es ? "active" : ""}`} onClick={() => setLanguage('en')}>EN</div>
        </div>

        {/* Navigation Buttons */}
        {sections.map((section, index) => (
          <button
            className={`navbar-button desktop ${currentIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => scrollToSection(index)}
          >
            <span className={`navbar-button-sub ${currentIndex === index ? "active" : ""}`}>{section}</span>
          </button>
        ))}

        {/* Social Media Icons */}
        <SocialMedia />
      </div>
    </div>
  );
};

export default NavBar;
