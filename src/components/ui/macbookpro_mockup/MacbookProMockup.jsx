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
        <div className='macbookpro-mockup'>
            <div className='macbookpro-mockup-img'>
                <img src={macbookpro} alt="" />
                <div className='macbook-inside-img' ref={imgRef}>
                    <img src={scrollingImg} alt="" />
                </div>
            </div>
        </div>
    )
};

export default MacbookProMockup;