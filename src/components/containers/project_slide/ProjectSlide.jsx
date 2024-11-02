import React from 'react';
import { MacbookProMockup, IphoneMockup } from '../../ui';
import './project-slide.css';

const ProjectSlide = ({animate, imagePc, imagePcY}) => {
    return (
        <div className='project-slide'>
            <div className='project-slide-title'>
                <div>Proyecto</div>
            </div>
            <div className='mockup'>
                <div className='mockup-macbookpro'>
                    <MacbookProMockup animate={animate} scrollingImg={imagePc} yImg={imagePcY} />
                </div>
                <div>
                    <IphoneMockup />
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;