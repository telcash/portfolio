import React, { useEffect, useRef } from 'react';
import { iphone } from '../../../assets/mockups';
import { gsap } from 'gsap';
import './iphone-mockup.css';

const IphoneMockup = ({ animate, scrollingImg, yImg}) => {
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.set(imgRef.current, { y: 0 });
        if (animate) {
            gsap.to(imgRef.current, {
                y: -yImg,
                duration: 8,
                ease: 'none',
                repeat: -1,
                yoyo: true,
                delay: 1
            });
        }
    }, [animate, yImg]);
    return (
        <div className='iphone-mockup'>
            <div className='iphone-mockup-img'>
                <img src={iphone} alt="" />
            </div>
            <div className='iphone-inside-img' ref={imgRef}>
                <img src={scrollingImg} alt="" />
            </div>
        </div>
    )
};

export default IphoneMockup;