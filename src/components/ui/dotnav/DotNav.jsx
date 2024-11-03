import React from "react";
import "./dotnav.css";

const DotNav = ({ scrollToSection, currentIndex }) => {
    return (
        <div className="dotnav">
            {[0, 1, 2, 3, 4].map((index) => (
                <div
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className="dot"
                    style={{
                        backgroundColor: currentIndex === index ? "#BD7643" : "#ccc",
                    }}
                />
            ))}
        </div>
    );
};

export default DotNav;