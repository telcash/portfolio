const DotNav = ({ scrollToSection, currentIndex }) => {
    return (
        <div style={dotNavStyle}>
            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    onClick={() => scrollToSection(index)}
                    style={{
                        ...dotStyle,
                        backgroundColor: currentIndex === index ? "#333" : "#ccc",
                    }}
                />
            ))}
        </div>
    );
};


const dotNavStyle = {
    position: "fixed",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1000,
};

const dotStyle = {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
};

export default DotNav;