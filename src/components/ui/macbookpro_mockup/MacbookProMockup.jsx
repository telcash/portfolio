import React, { useEffect, useRef } from 'react';
import { macbookpro } from '../../../assets/mockups';
import { gsap } from 'gsap';
import './macbookpro-mockup.css';

const MacbookProMockup = ({ animate, scrollingImg, yImg }) => {
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.set(imgRef.current, { y: 0 });
        if (animate) {
            gsap.to(imgRef.current, {
                y: window.innerWidth > 900 ? -yImg : -yImg * 0.5,
                duration: 8,
                ease: 'none',
                repeat: -1,
                yoyo: true,
                delay: 1
            });
        }
    }, [animate, yImg]);

    return (
        <div className='macbookpro-mockup'>
            <div className='macbookpro-mockup-img'>
                <img src={macbookpro} alt="" />
            </div>
            <div className='macbookpro-inside-img' ref={imgRef}>
                <img src={scrollingImg} alt="" />
            </div>
        </div>
    )
};

export default MacbookProMockup;