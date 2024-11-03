import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logoBlanco from "../../../assets/logo-blanco.png";
import "./contact-form.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { hover } from "@testing-library/user-event/dist/hover";

const ContactForm = () => {

    const [t] = useTranslation("global");

    const form = useRef(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [message, setMessage] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputEmail);
        setIsValidEmail(isValid);
    }

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        setEmail("");
        setIsValidEmail(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValidEmail) {
            emailjs.sendForm('service_h98mhbp', 'template_ar0z6cg', form.current, 'cGIbf9JgXXl-yu8EN')
                .then((result) => {
                    setName("");
                    setEmail("");
                    setMessage("");
                    setShowSuccessModal(true);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-logo">
                        <img src={logoBlanco} alt="" />
                    </div>
                    <div className="info-data">
                        <div className="info-data-title">CARLOS SALAZAR</div>
                        <div className="info-data-phone">Tel: +34 617638070</div>
                        <div className="info-data-email">telcash@protonmail</div>
                    </div>
                </div>
                <div className="contact-form">
                    <Box
                        sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Box sx={{ maxWidth: 600, mx: "auto", p: 2, pt: 0}}>
                            <form ref={form} onSubmit={handleSubmit}>
                                <TextField
                                    name="from_name"
                                    sx={{backgroundColor: '#fff'}}
                                    inputProps={{style: {fontFamily: 'sans-serif', fontSize: '1.6rem'}}}
                                    InputLabelProps={{style: {fontFamily: 'sans-serif', fontSize: '1.6rem'}}}
                                    fullWidth
                                    label={t("contact.name")}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    margin="normal"
                                    required
                                    size="small"
                                    variant="filled"
                                />
                                <TextField
                                    error={(!isValidEmail && email !== '')}
                                    helperText={isValidEmail || email === '' ? "" : t("contact.emailError")}
                                    name="email" 
                                    sx={{backgroundColor: '#fff'}}
                                    inputProps={{style: {fontFamily: 'sans-serif', fontSize: '1.6rem'}}}
                                    InputLabelProps={{style: {fontFamily: 'sans-serif', fontSize: '1.6rem'}}}
                                    fullWidth
                                    label={t("contact.email")}
                                    value={email}
                                    onChange={(e) => handleEmailChange(e)}
                                    margin="normal"
                                    required
                                    size="small"
                                    variant="filled"
                                />
                                <TextField
                                    name="message"
                                    sx={{backgroundColor: '#fff'}}
                                    inputProps={{style: {fontFamily: 'sans-serif', fontSize: '1.6rem'}}}
                                    InputLabelProps={{style: {fontFamily: 'sans-serif', fontSize: '1.6rem'}}}
                                    fullWidth
                                    label={t("contact.message")}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    margin="normal"
                                    required
                                    multiline
                                    rows={4}
                                    variant="filled"
                                />
                                <Button 
                                    variant="contained"
                                    type="submit"
                                    sx={{ mt: 2, ":hover": {backgroundColor: '#BD7643'}, fontSize: '1.25rem', fontFamily: 'sans-serif'}}    
                                    color="gray_clear"
                                >
                                    {t("contact.submit")}
                                </Button>
                            </form>
                            {showSuccessModal && (
                                <div className="modal">
                                    <Typography mt={2} mb={1} color="#fff">
                                        {t("contact.success")}
                                    </Typography>
                                    <Button variant="contained" size="small" onClick={handleCloseModal}>{t("contact.closeSuccess")}</Button>
                                </div>
                            )}
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;