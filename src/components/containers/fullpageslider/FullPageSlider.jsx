import React, { useRef, useEffect, useState } from 'react';
import { BackendSlide, ContactForm, FrontendSlide, Hero, NavBar, PortfolioSlider } from '../../containers';
import { DotNav } from '../../ui';
import { gsap } from 'gsap';
import './fullpageslider.css';
import useViewportHeight from '../../../hooks/useViewportHeight';

const FullPageSlider = () => {
    const sectionsRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const isScrolling = useRef(false);
    const scrollSensitivity = 30;
    const touchStartY = useRef(0);
    const vh = useViewportHeight();

    useEffect(() => {
        sectionsRef.current.forEach((section, i) => {
          gsap.set(section, { yPercent: i * 100 });
        });

        const container = document.querySelector('.slide-container');
        const handleTouchMove = (e) => {
            e.preventDefault();
        };
        container.addEventListener('touchmove', handleTouchMove, { passive: false });
        return () => {
            container.removeEventListener('touchmove', handleTouchMove);
        }
      }, []);

    const scrollToSection = (index) => {
        if (isScrolling.current) return;
        isScrolling.current = true;
        gsap.to(sectionsRef.current, {
            yPercent: -100 * index,
            ease: "power2.out",
            duration: 1,
            onComplete: () => {
                isScrolling.current = false;
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

    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDistance = touchEndY - touchStartY.current;

        if (swipeDistance < -scrollSensitivity && currentIndex < sectionsRef.current.length - 1) {
            scrollToSection(currentIndex + 1);
        } else if (swipeDistance > scrollSensitivity && currentIndex > 0) {
            scrollToSection(currentIndex - 1);
        }
    };


    return (
        <div 
            className='slide-container'
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ height: `${vh * 100}px` }}
        >
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
            <div className='slide portfolio' ref={(el) => (sectionsRef.current[3] = el)}>
                <PortfolioSlider animate = {currentIndex === 3} />
            </div>
            <div className='slide contact' ref={(el) => (sectionsRef.current[4] = el)}>
                <ContactForm animate = {currentIndex === 4} />
            </div>
        </div>
    );
};


export default FullPageSlider;
