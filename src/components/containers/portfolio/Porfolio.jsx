import React from "react";
import './portfolio.css';

import Typography from '@mui/material/Typography';

import { Project } from '../../ui';
import { flowguardScreenShot } from '../../../assets/projects-img';

import { useTranslation } from "react-i18next";

const Portfolio = () => {

    const [t] = useTranslation("global");

    return (
        <div className="cs_portfolio">
            <div className="cs_portfolio-heading">
                <Typography variant="h2" component="h2">
                    {t("portfolio.title")}
                </Typography>
            </div>
            <div className="cs_portfolio_projects">
                <Project 
                    name="Flowguard"
                    screenshot={flowguardScreenShot}
                    giturl="https://github.com/telcash/flowguard_frontend.git"
                    weburl="https://glittery-lolly-acf638.netlify.app"
                />
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default Portfolio;