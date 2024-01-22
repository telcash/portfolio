import React, { useState, useRef } from "react";
import './contact.css';

import emailjs from '@emailjs/browser';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useTranslation } from "react-i18next";

const Contact = () => {

    const [t] = useTranslation("global");

    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h98mhbp', 'template_ar0z6cg', form.current, 'cGIbf9JgXXl-yu8EN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="cs_contact">
            <Box
                sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
                <Box sx={{ maxWidth: 600, mx: "auto", p: 2}}>
                    <Typography variant="h4" align="center" mb={2} sx={{ fontFamily: 'monospace', fontSize: 48, color: '#fff'}}>
                        {t("footer.title")}
                    </Typography>
                    <form ref={form} onSubmit={handleSubmit}>
                        <TextField
                            name="from_name"
                            sx={{backgroundColor: '#fff'}}
                            fullWidth
                            label={t("footer.contact.name")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
                            size="small"
                            variant="filled"
                        />
                        <TextField
                            name="email" 
                            sx={{backgroundColor: '#fff'}}
                            fullWidth
                            label={t("footer.contact.email")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                            size="small"
                            variant="filled"
                        />
                        <TextField
                            name="message"
                            sx={{backgroundColor: '#fff'}}
                            fullWidth
                            label={t("footer.contact.message")}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            required
                            multiline
                            rows={4}
                            variant="filled"
                        />
                        <Button variant="contained" type="submit" sx={{ mt: 2}} color="gray_clear">
                            {t("footer.contact.submit")}
                        </Button>
                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default Contact;