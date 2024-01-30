import React from "react";
import './hero.css';

import { useTypewriter } from "../../../hooks/useTypewriter";

import Typography from '@mui/material/Typography';

import { CsAvatar } from '../../ui';

import { useTranslation } from "react-i18next";

const Hero = () => {

    const [t] = useTranslation("global");
    const description = useTypewriter(t("hero.description"), 35, 1500);

    return (
        <div className="cs_hero">
            <CsAvatar size={120}/>
            <Typography
                className="scale-in-center"
                variant="h1"
                component="h1"
                zIndex={1}
                
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                }}
            >
                {t("name")}
            </Typography>
            <Typography
                className="slide-in-left"
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
                height={72}
                maxWidth={600}
                minWidth={370}
                width='60%'
                component="p"
                sx={{
                    fontFamily: 'monospace'
                }}
            >
                {description}
            </Typography>
        </div>
    )
}

export default Hero;