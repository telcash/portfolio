import React, { useRef, useState} from 'react';
import { gsap } from 'gsap';
import { flowguardPc, flowguardPhone } from '../../../assets/projects-img';
import ProjectSlide from '../project_slide/ProjectSlide';
import './portfolio-slider.css';

const PortfolioSlider = ({ animate }) => {
    const sectionsRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const scrollToSection = (index) => {
        gsap.to(sectionsRef.current, {
            xPercent: -100 * index,
            ease: "power2.out",
            duration: 1,
        });
        setCurrentIndex(index);
    }

    const handleLeftArrowClick = () => {
        if (currentIndex > 0) {
            scrollToSection(currentIndex - 1);
        }
    };
    
    const handleRightArrowClick = () => {
        if (currentIndex < sectionsRef.current.length - 1) {
            scrollToSection(currentIndex + 1);
        }
    };

    return (
        <div className='portfolio-slider'>
            <div className='portfolio-slider-container'>
                <div className='horizontal-slide' ref={(el) => (sectionsRef.current[0] = el)}>
                    <ProjectSlide 
                        animate={animate && currentIndex === 0}
                        imagePc={flowguardPc}
                        imagePcY={1200}
                        imagePhone={flowguardPhone}
                        imagePhoneY={1200}
                    />
                </div>
                <div className='horizontal-slide' ref={(el) => (sectionsRef.current[1] = el)}>
                    <h2>Proyecto 2</h2>
                </div>
                <div className='horizontal-slide' ref={(el) => (sectionsRef.current[2] = el)}>
                    <h2>Proyecto 3</h2>
                </div>
            </div>
            <button className='left-arrow' onClick={handleLeftArrowClick}>-</button>
            <button className='right-arrow' onClick={handleRightArrowClick}>+</button>
        </div>
    );
}

export default PortfolioSlider;