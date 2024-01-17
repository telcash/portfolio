import React from "react";
import './hero.css';

import { CsAvatar } from '../../ui';

import { useTranslation } from "react-i18next";

const Hero = () => {

    const [t] = useTranslation("global");

    return (
        <div className="cs_hero">
            <CsAvatar size={120}/>
            <h1>{t("name")}</h1>
            <h4>{t("hero.job")}</h4>
        </div>
    )
}

export default Hero;