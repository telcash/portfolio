import React from "react";
import './skill-bar.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 30,
}));

const SkillBar = ({logoSrc, name, progress}) => {
    return (
        <div className="cs_skillBar">
            <div className="cs_skillBar-logo">
                <img src={logoSrc} alt={name} />
            </div>
            <div className="cs_skillBar-heading">
                <h3>{name}</h3>
            </div>
            <Box sx={{ width: 300 }}>
                <BorderLinearProgress variant="determinate" value={progress} />
            </Box>
        </div>
    )
}

export default SkillBar;