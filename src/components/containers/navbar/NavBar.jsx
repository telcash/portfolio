import React from 'react';

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "none",
  padding: "10px",
  //boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  zIndex: 1000,
};

const buttonStyle = {
  background: "none",
  border: "none",
  margin: "0 10px",
  padding: "10px",
  cursor: "pointer",
  fontSize: "16px",
};

const NavBar = ({ scrollToSection, currentIndex }) => {
  const sections = ["Section 1", "Section 2", "Section 3"];
  return (
    <div style={navStyle}>
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          style={{
            ...buttonStyle,
            fontWeight: currentIndex === index ? "bold" : "normal",
          }}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default NavBar;