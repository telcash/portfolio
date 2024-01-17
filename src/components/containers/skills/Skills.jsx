import React from "react";
import './skills.css';

import { SkillBar } from '../../ui'
import { angularLogo, reactLogo, cssLogo, nodeLogo, expressjsLogo, nestjsLogo } from '../../../assets/logos';

import { useTranslation } from "react-i18next";

const Skills = () => {

    const [t] = useTranslation("global");

    return (
        <div className="cs_skills">
            <h2>{t("skills.title")}</h2>
            <div className="cs_skills_containers">
                <div className="cs_skills-container">
                    <h3>Frontend</h3>
                    <SkillBar logoSrc={reactLogo} name={'React'} progress={75}/>
                    <SkillBar logoSrc={angularLogo} name={'Angular'} progress={55}/>
                    <SkillBar logoSrc={cssLogo} name={'CSS'} progress={70}/>
                </div>
                <div className="cs_skills-container">
                    <h3>Backend</h3>
                    <SkillBar logoSrc={nodeLogo} name={'Node'} progress={75}/>
                    <SkillBar logoSrc={expressjsLogo} name={'Express.js'} progress={55}/>
                    <SkillBar logoSrc={nestjsLogo} name={'NestJS'} progress={70}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;