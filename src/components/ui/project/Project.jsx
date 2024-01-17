import React, {useState} from "react";
import './project.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import flowguardImg from '../../../assets/projects-img/flowguard.jpg';

const Project = () => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div 
            className="cs_project"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            <Box sx={{display: flipped ? 'none' : 'block'}}>
                <Card sx={{width: 360, height: 360}}>
                    <CardMedia
                        component="img"
                        image={flowguardImg}
                        alt="flowguard"
                    />
                </Card>
            </Box>
            <Box sx={{display: flipped ? 'block' : 'none'}}>
                <Card sx={{width: 360, height: 360, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Flowguard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>React</li>
                                <li>CSS</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>  
        </div>
    );
};

export default Project;