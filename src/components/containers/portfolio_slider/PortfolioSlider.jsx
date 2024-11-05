import React, { useRef, useState} from 'react';
import { gsap } from 'gsap';
import { flowguardPc, flowguardPhone, essentialkteePc, essentialkteePhone, charlieSaboresPc, charlieSaboresPhone } from '../../../assets/projects-img';
import ProjectSlide from '../project_slide/ProjectSlide';
import { useTranslation } from "react-i18next";
import './portfolio-slider.css';

const PortfolioSlider = ({ animate }) => {
    const sectionsRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [t] = useTranslation("global");
    
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
            <div className='portfolio-slider-title'>
                {t("projects.title")}
            </div>
            <div className='portfolio-slider-container'>
                <div 
                    className='horizontal-slide'ref={(el) => (sectionsRef.current[0] = el)}>
                    <ProjectSlide
                        data={
                            {
                                title: t("projects.1.title"),
                                description: t("projects.1.description"),
                                tech: t("projects.1.tech"),
                                link: t("projects.1.link"),
                            }
                        }
                        animate={animate && currentIndex === 0}
                        imagePc={flowguardPc}
                        imagePhone={flowguardPhone}
                    />
                </div>
                <div className='horizontal-slide' ref={(el) => (sectionsRef.current[1] = el)}>
                    <ProjectSlide
                        data={
                            {
                                title: t("projects.2.title"),
                                description: t("projects.2.description"),
                                tech: t("projects.2.tech"),
                                link: t("projects.2.link"),
                            }
                        }
                        animate={animate && currentIndex === 1}
                        imagePc={charlieSaboresPc}
                        imagePhone={charlieSaboresPhone}
                    />
                </div>
                <div className='horizontal-slide' ref={(el) => (sectionsRef.current[2] = el)}>
                    <ProjectSlide
                        data={
                            {
                                title: t("projects.3.title"),
                                description: t("projects.3.description"),
                                tech: t("projects.3.tech"),
                                link: t("projects.3.link"),
                            }
                        }
                        animate={animate && currentIndex === 2}
                        imagePc={essentialkteePc}
                        imagePhone={essentialkteePhone}
                    />
                </div>
            </div>
            <button className='left-arrow' onClick={handleLeftArrowClick}>&lt;</button>
            <button className='right-arrow' onClick={handleRightArrowClick}>&gt;</button>
        </div>
    );
}

export default PortfolioSlider;