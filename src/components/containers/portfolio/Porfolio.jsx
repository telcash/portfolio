import React from "react";
import './portfolio.css';

import Typography from '@mui/material/Typography';

import { Project } from '../../ui';
import { flowguardScreenshot, charlieSaboresScreenshot, charliesaboresJsVanilla } from '../../../assets/projects-img';

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
                    name="Charlie Sabores"
                    screenshot={charlieSaboresScreenshot}
                    giturl="https://github.com/telcash/tfmAtriumFullStack.git"
                    weburl="http://34.224.98.21/"
                />
                <Project 
                    name="Flowguard"
                    screenshot={flowguardScreenshot}
                    giturl="https://github.com/telcash/flowguard_frontend.git"
                    weburl="https://glittery-lolly-acf638.netlify.app"
                />
                <Project
                    name="Charlie Sabores"
                    screenshot={charliesaboresJsVanilla}
                    giturl=""
                    weburl=""
                />
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default Portfolio;