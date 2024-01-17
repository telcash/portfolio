import React from "react";
import './hero.css';

import { CsAvatar } from '../../ui';

const Hero = () => {
    return (
        <div className="cs_hero">
            <CsAvatar size={120}/>
            <h1>Carlos Salazar</h1>
            <h4>Full Stack Developer</h4>
        </div>
    )
}

export default Hero;