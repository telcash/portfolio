import React, { useState } from "react";
import './contact.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useTranslation } from "react-i18next";

const Contact = () => {

    const [t] = useTranslation("global");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="cs_contact">
            <Box
                sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
                <Box sx={{ maxWidth: 600, mx: "auto", p: 2}}>
                    <Typography variant="h4" align="center" mb={2}>
                        {t("footer.title")}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField 
                            fullWidth
                            label={t("footer.contact.name")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField 
                            fullWidth
                            label={t("footer.contact.email")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField 
                            fullWidth
                            label={t("footer.contact.message")}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            required
                            multiline
                            rows={4}
                        />
                        <Button variant="contained" type="submit" sx={{ mt: 2}}>
                            {t("footer.contact.submit")}
                        </Button>
                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default Contact;