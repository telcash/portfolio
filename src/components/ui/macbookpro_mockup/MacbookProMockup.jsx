import React, { useEffect, useRef } from 'react';
import { macbookpro } from '../../../assets/mockups';
import { gsap } from 'gsap';
import './macbookpro-mockup.css';
import useImageDimensions from '../../../hooks/useImageDimesions';

const MacbookProMockup = ({ animate, scrollingImg }) => {
    const imgRef = useRef(null);

    const { width, height } = useImageDimensions(scrollingImg);

    useEffect(() => {
        gsap.set(imgRef.current, { y: 0 });
        if (animate) {
            gsap.to(imgRef.current, {
                y: window.innerWidth > 900 ? -(604 * (height / width) - 388)
                    : -(264 * (height / width) - 169),
                duration: 10,
                ease: 'none',
                repeat: -1,
                yoyo: true,
                delay: 1.5
            });
        }
    }, [animate, height, width ]);

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