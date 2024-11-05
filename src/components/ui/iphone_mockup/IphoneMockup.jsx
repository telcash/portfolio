import React, { useEffect, useRef } from 'react';
import { iphone } from '../../../assets/mockups';
import { gsap } from 'gsap';
import './iphone-mockup.css';
import useImageDimensions from '../../../hooks/useImageDimesions';

const IphoneMockup = ({ animate, scrollingImg }) => {
    const imgRef = useRef(null);

    const { width, height } = useImageDimensions(scrollingImg);

    useEffect(() => {
        gsap.set(imgRef.current, { y: 0 });
        if (animate) {
            gsap.to(imgRef.current, {
                y: window.innerWidth > 900 ? -(130 * (height / width) - 297)
                    : -(72 * (height / width) - 158),
                duration: 10,
                ease: 'none',
                repeat: -1,
                yoyo: true,
                delay: 1.5
            });
        }
    }, [animate, height, width]);
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