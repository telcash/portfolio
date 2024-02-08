import React from "react";
import './portfolio.css';

import Typography from '@mui/material/Typography';

import { Project } from '../../ui';
import { flowguardScreenshot, charlieSaboresScreenshot, charliesaboresJsVanilla, portfolioScreenshot, expressApiAuthScreeenshot } from '../../../assets/projects-img';

import { useTranslation } from "react-i18next";

const Portfolio = () => {

    const [t] = useTranslation("global");

    return (
        <div className="cs_portfolio">
            <div className="cs_portfolio-heading">
                <Typography variant="h2" component="h2" sx={{fontFamily: 'monospace', fontSize: 48}}>
                    {t("portfolio.title")}
                </Typography>
            </div>
            <div className="cs_portfolio_projects">
                <Project
                    name={t("portfolio.projects.charliesaboresfs.name")}
                    description={t("portfolio.projects.charliesaboresfs.description")}
                    screenshot={charlieSaboresScreenshot}
                    giturl="https://github.com/telcash/tfmAtriumFullStack.git"
                    weburl="http://34.224.98.21/"
                />
                <Project 
                    name={t("portfolio.projects.flowguard.name")}
                    description={t("portfolio.projects.flowguard.description")}
                    screenshot={flowguardScreenshot}
                    giturl="https://github.com/telcash/flowguard_frontend.git"
                    weburl="https://glittery-lolly-acf638.netlify.app"
                />
                <Project
                    name={t("portfolio.projects.portfolio.name")}
                    description={t("portfolio.projects.portfolio.description")}
                    screenshot={portfolioScreenshot}
                    giturl="https://github.com/telcash/portfolio.git"
                    weburl="http://www.carlossalazar.es"
                />
                <Project
                    name={t("portfolio.projects.charliesaboresjs.name")}
                    description={t("portfolio.projects.charliesaboresjs.description")}
                    screenshot={charliesaboresJsVanilla}
                    giturl="https://github.com/telcash/charlie_sabores_jsvanilla.git"
                    weburl="https://telcash.github.io/charlie_sabores_jsvanilla/"
                />
                <Project
                    name={t("portfolio.projects.expressApiAuth.name")}
                    description={t("portfolio.projects.expressApiAuth.description")}
                    screenshot={expressApiAuthScreeenshot}
                    giturl="https://github.com/telcash/express-api-auth.git"
                />
            </div>
        </div>
    )
}

export default Portfolio;