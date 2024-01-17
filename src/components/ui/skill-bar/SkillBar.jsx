import React from "react";
import './skill-bar.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 30,
}));

const SkillBar = ({progress}) => {
    return (
        <div className="cs_skillBar">
            <Box sx={{ width: 300 }}>
                <BorderLinearProgress variant="determinate" value={progress} />
            </Box>
        </div>
    )
}

export default SkillBar;