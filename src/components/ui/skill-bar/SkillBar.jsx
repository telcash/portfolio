import React, { useState, useEffect, useRef } from "react";
import './skill-bar.css';

import {useIsVisible} from "../../../hooks/useIsVisible";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 30,
}));

const SkillBar = ({logoSrc, name, progress}) => {

    const ref = useRef();
    const isVisible = useIsVisible(ref);

    const [actualProgress, setActualProgress] = useState(0);

    useEffect(() => {
        let timer = 0;

        const setProgress = () => {
            if (isVisible) {
                setActualProgress((oldProgress) => {
                    if (oldProgress >= progress) {
                        return progress;
                    };
                    const newProgress = oldProgress + 10;
                    timer = setTimeout(setProgress, 50);
                    return newProgress >= progress ? progress : newProgress; 
                })

            }
        }

        timer = setTimeout(setProgress, 50);

        return () => {
            clearTimeout(timer);
        }
    });

    return (
        <div className="cs_skillBar" ref={ref}>
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
            <div className="cs_skillBar-bar">
                <Box sx={{width: '100%'}}>
                    <BorderLinearProgress color="gray_clear" variant="determinate" value={actualProgress} />
                </Box>
            </div>
        </div>
    )
}

export default SkillBar;