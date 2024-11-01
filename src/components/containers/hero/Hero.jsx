import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/logo.png";
import "./hero.css";

const Hero = () => {
    const [t] = useTranslation("global");
    return (
        <div className="hero">
            <div className="hero-header">
                <div className="hero-header-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="hero-header-title">
                    <h1 className="title">{t("hero.title")}</h1>
                    <p className="subtitle">{t("hero.subtitle")}</p>
                </div>
            </div>
            <div className="hero-description">
                <p>{t("hero.description")}</p>
            </div>
        </div>
    );
}
export default Hero;