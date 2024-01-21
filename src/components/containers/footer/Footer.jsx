import React from 'react';
import './footer.css';

import Typography from '@mui/material/Typography';

import { Contact, SocialMedia } from '../../ui';

const Footer = () => {
    return (
        <div className="cs_footer">
            <Contact />
            <SocialMedia />
            <Typography variant="h6" align="center" mb={2} sx={{color: '#ed6c02'}}>
                Carlos Salazar  @2024   
            </Typography>
        </div>
    )
}

export default Footer;