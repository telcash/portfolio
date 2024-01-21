import React from "react";
import './social-media.css';

import { githubLogo, linkedinLogo } from '../../../assets/logos';

const SocialMedia = () => {
    return (
        <div className="cs_socialMedia">
            <div className="cs_socialMedia-logo">
                <a href="https://www.linkedin.com/in/carlos-salazar-vallenilla-a10415237" target="blank"><img src={linkedinLogo} alt="Linkedin" /></a>
            </div>
            <div className="cs_socialMedia-logo">
                <a href="https://github.com/telcash" target="blank"><img src={githubLogo} alt="Github" /></a>
            </div>
        </div>
    );
};

export default SocialMedia;