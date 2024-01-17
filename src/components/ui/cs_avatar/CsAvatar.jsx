import React from "react";
import './cs-avatar.css';

import Avatar from '@mui/material/Avatar';
import avatarImg from '../../../assets/cs-avatar.jpg'; 

const CsAvatar = ({size}) => {
    return (
        <div className="cs_csAvatar">
            <Avatar
                alt="Carlos Salazar"
                src={avatarImg}
                sx={{width: size ?? 24, height: size ?? 24}}
            >
            </Avatar>
        </div>
    );
};

export default CsAvatar;