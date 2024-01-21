import React, {useState} from "react";
import './project.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Project = ({screenshot, name, giturl, weburl }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            <div className={`cs_project ${flipped ? 'scale-in-ver-center' : ''}`}>
                <Box sx={{display: flipped ? 'none' : 'block'}}>
                    <Card sx={{width: 360, height: 360}}>
                        <CardMedia
                            component="img"
                            image={screenshot}
                            alt={name}
                        />
                    </Card>
                </Box>
                <Box sx={{display: flipped ? 'block' : 'none'}}>
                    <Card sx={{width: 360, height: 360, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {name}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                            {weburl &&
                                <Button href={weburl} target="blank">
                                    <OpenInNewIcon/>
                                </Button>
                            }
                            {giturl &&
                                <Button href={giturl} target="blank">
                                    <GitHubIcon/>
                                </Button>
                            }
                        </CardActions>
                    </Card>
                </Box>  
            </div>
        </div>
    );
};

export default Project;