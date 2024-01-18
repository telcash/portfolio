import React from 'react';
import './footer.css';

import { Contact, SocialMedia } from '../../ui';

const Footer = () => {
    return (
        <div className="cs_footer">
            <Contact />
            <SocialMedia />
        </div>
    )
}

export default Footer;