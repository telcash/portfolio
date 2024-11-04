import React from 'react';
import { MacbookProMockup, IphoneMockup } from '../../ui';
import './project-slide.css';

const ProjectSlide = ({animate, imagePc, imagePcY, imagePhone, imagePhoneY}) => {
    return (
        <div className='project-slide'>
            <div className='project-slide-title'>
                <div>Proyecto</div>
            </div>
            <div className='mockup'>
                <div className='mockup-macbook'>
                    <MacbookProMockup animate={animate} scrollingImg={imagePc} yImg={imagePcY} />
                </div>
                <div className='mockup-iphone'>
                    <IphoneMockup animate={animate} scrollingImg={imagePhone} yImg={imagePhoneY}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;