import React, { useRef, useEffect, useState } from 'react';
import { BackendSlide, FrontendSlide, Hero, NavBar } from '../../containers';
import { DotNav } from '../../ui';
import { gsap } from 'gsap';
import './fullpageslider.css';

const FullPageSlider = () => {
    const sectionsRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const isScrollint = useRef(false);
    const scrollSensitivity = 30;

    useEffect(() => {
        sectionsRef.current.forEach((section, i) => {
          gsap.set(section, { yPercent: i * 100 });
        });
      }, []);

    const scrollToSection = (index) => {
        if (isScrollint.current) return;
        isScrollint.current = true;
        gsap.to(sectionsRef.current, {
            yPercent: -100 * index,
            ease: "power2.out",
            duration: 1,
            onComplete: () => {
                isScrollint.current = false;
            },
        });
        setCurrentIndex(index);
    };

    const handleWheel = (e) => {
        if (e.deltaY > scrollSensitivity && currentIndex < sectionsRef.current.length - 1) {
            scrollToSection(currentIndex + 1);
        } else if (e.deltaY < -1 * scrollSensitivity && currentIndex > 0) {
            scrollToSection(currentIndex - 1);
        }
    };

    return (
        <div className='slide-container' onWheel={handleWheel}>
            <NavBar scrollToSection={scrollToSection} currentIndex={currentIndex} />
            <DotNav scrollToSection={scrollToSection} currentIndex={currentIndex} />
            <div className='slide hero' ref={(el) => (sectionsRef.current[0] = el)}>
                <Hero />
            </div>
            <div className='slide frontend' ref={(el) => (sectionsRef.current[1] = el)}>
                <FrontendSlide animate = {currentIndex === 1} />
            </div>
            <div className='slide backend' ref={(el) => (sectionsRef.current[2] = el)}>
                <BackendSlide animate = {currentIndex === 2} />
            </div>
        </div>
    );
};


export default FullPageSlider;
