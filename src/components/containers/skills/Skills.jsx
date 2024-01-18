import React from "react";
import './skills.css';

import Typography from '@mui/material/Typography';

import { SkillBar } from '../../ui'
import { angularLogo, reactLogo, htmlLogo, javascriptLogo, cssLogo, figmaLogo, nodeLogo, expressjsLogo, nestjsLogo, postgresLogo, mysqlLogo, prismaLogo, mongodbLogo } from '../../../assets/logos';

import { useTranslation } from "react-i18next";

const Skills = () => {

    const [t] = useTranslation("global");

    return (
        <div className="cs_skills">
            <Typography
                variant="h2"
                component="h2"
            >
                {t("skills.title")}
            </Typography>
            <div className="cs_skills_containers">
                <div className="cs_skills-container">
                    <Typography
                        variant="h3"
                        component="h3"
                    >
                        Frontend
                    </Typography>
                    <SkillBar logoSrc={reactLogo} name={'React'} progress={75}/>
                    <SkillBar logoSrc={angularLogo} name={'Angular'} progress={55}/>
                    <SkillBar logoSrc={htmlLogo} name={'HTML'} progress={70}/>
                    <SkillBar logoSrc={cssLogo} name={'CSS'} progress={70}/>
                    <SkillBar logoSrc={javascriptLogo} name={'Javascript'} progress={70}/>
                    <SkillBar logoSrc={figmaLogo} name={'Figma'} progress={70}/>
                </div>
                <div className="cs_skills-container">
                    <Typography
                        variant="h3"
                        component="h3"
                    >
                        Backend
                    </Typography>
                    <SkillBar logoSrc={nodeLogo} name={'Node'} progress={75}/>
                    <SkillBar logoSrc={expressjsLogo} name={'Express.js'} progress={55}/>
                    <SkillBar logoSrc={nestjsLogo} name={'NestJS'} progress={70}/>
                    <SkillBar logoSrc={mysqlLogo} name={'MySQL'} progress={70}/>
                    <SkillBar logoSrc={postgresLogo} name={'Postgres'} progress={70}/>
                    <SkillBar logoSrc={prismaLogo} name={'Prisma'} progress={70}/>
                    <SkillBar logoSrc={mongodbLogo} name={'MongoDB'} progress={70}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;