import React from "react";
import './hero.css';

import Typography from '@mui/material/Typography';

import { CsAvatar } from '../../ui';

import { useTranslation } from "react-i18next";

const Hero = () => {

    const [t] = useTranslation("global");

    return (
        <div className="cs_hero">
            <CsAvatar size={120}/>
            <Typography
                variant="h1"
                component="h1"
                zIndex={1}
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: 50,
                }}
            >
                {t("name")}
            </Typography>
            <Typography
                variant="h4"
                component="h4"
                zIndex={1}
                sx={{
                    fontFamily: 'monospace'
                }}
            >
                {t("hero.job")}
            </Typography>
            <Typography
            zIndex={1}
            width='50%'
                component="p"
                sx={{
                    fontSize: 16,
                    fontFamily: 'monospace'
                }}
            >
                {t("hero.description")}
            </Typography>
        </div>
    )
}

export default Hero;