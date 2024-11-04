import React from 'react';
import { MacbookProMockup, IphoneMockup } from '../../ui';
import './project-slide.css';

const ProjectSlide = ({data, animate, imagePc, imagePcY, imagePhone, imagePhoneY}) => {
    return (
        <div className='project-slide'>
            <div className='project-slide-content'>
                <div className='project-slide-title'>{data.title}</div>
                <div className='project-slide-description'>{data.description}</div>
            </div>
            <div className='mockup'>
                <div className='mockup-macbook'>
                    <a href={data.link} target='blank'>
                        <MacbookProMockup animate={animate} scrollingImg={imagePc} yImg={imagePcY} />
                    </a>
                </div>
                <div className='mockup-iphone'>
                    <a href={data.link} target='blank'>
                        <IphoneMockup animate={animate} scrollingImg={imagePhone} yImg={imagePhoneY}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;