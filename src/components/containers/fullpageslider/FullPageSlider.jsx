import React, { useRef, useEffect, useState } from 'react';
import { NavBar } from '../../containers';
import { DotNav } from '../../ui';
import { gsap } from 'gsap';
import homeBackgroundVideo from '../../../assets/home_background.svg';

const FullPageSlider = () => {
    const sectionsRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        gsap.set(sectionsRef.current, { yPercent: (i) => i * 100 });
    }, []);

    const scrollToSection = (index) => {
        gsap.to(sectionsRef.current, {
            yPercent: -100 * index,
            ease: "power2.out",
            duration: 1,
        });
        setCurrentIndex(index);
    };

    const handleWheel = (e) => {
        if (e.deltaY > 0 && currentIndex < sectionsRef.current.length - 1) {
            scrollToSection(currentIndex + 1);
        } else if (e.deltaY < 0 && currentIndex > 0) {
            scrollToSection(currentIndex - 1);
        }
    };

    return (
        <div onWheel={handleWheel} style={{ height: "100vh", overflow: "hidden" }}>
            <NavBar scrollToSection={scrollToSection} currentIndex={currentIndex} />
            <DotNav scrollToSection={scrollToSection} currentIndex={currentIndex} />
            <div ref={(el) => (sectionsRef.current[0] = el)} style={sectionStyle(0)}>
                <VideoBackground videoSrc={homeBackgroundVideo} />
                <h1 style={textOverlayStyle}>Section 1</h1>
            </div>
            <div ref={(el) => (sectionsRef.current[1] = el)} style={sectionStyle(1)}>
                <h1>Section 2</h1>
            </div>
            <div ref={(el) => (sectionsRef.current[2] = el)} style={sectionStyle(2)}>
                <h1>Section 3</h1>
            </div>
        </div>
    );
};

const sectionStyle = (index) => ({
    height: "100vh",
    position: "relative",
    backgroundColor: index % 2 === 0 ? "#69c0ff" : "#ff85c0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const VideoBackground = ({ videoSrc }) => (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={videoStyle}
      src={videoSrc}
      type="image/svg+xml"
    />
  );

  const textOverlayStyle = {
    position: "relative",
    color: "#fff",
    zIndex: 1,
  };

  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  };


export default FullPageSlider;
