import React from 'react';
import iphone from '../../../assets/mockups/iphone.png';
import './iphone-mockup.css';

const IphoneMockup = () => {
    return (
        <div className='iphone-mockup'>
            <div className='iphone-mockup-img'>
                <img src={iphone} alt="" />
            </div>
        </div>
    )
};

export default IphoneMockup;