import React from "react";
import './portfolio.css';

import { Project } from '../../ui';

import { useTranslation } from "react-i18next";

const Portfolio = () => {

    const [t] = useTranslation("global");

    return (
        <div className="cs_portfolio">
            <h2>{t("portfolio.title")}</h2>
            <div className="cs_portfolio_projects">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default Portfolio;