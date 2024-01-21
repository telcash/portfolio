import React from "react";
import './skill-bar.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

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
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        fontSize: 16
                    }}
                >
                    {name}
                </Typography>
            </div>
            <Box sx={{ width: 300 }} >
                <BorderLinearProgress color="gray_clear" variant="determinate" value={progress} />
            </Box>
        </div>
    )
}

export default SkillBar;