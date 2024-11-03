import React, { useEffect } from "react";
import { LogoBox, ProgressiveText } from "../../ui";
import { figmaLogo, reactLogo, angularLogo } from "../../../assets/logos";
import { useTranslation } from "react-i18next";
import "./frontendslide.css";

const FrontendSlide = ({ animate }) => {
    const [t] = useTranslation("global");
    useEffect(() => {
        console.log(window.innerWidth, window.innerHeight);
    }, []);

    return (
        <div className="fes-container">
            <div className="fes-title">
                <ProgressiveText
                    text={t("frontend.title")}
                    animate={animate}
                />
            </div>
            <div className="fes-content">
                <div className="fes-logos">
                    <div className="logo-figma">
                        <LogoBox
                            logoImg={figmaLogo}
                            logoSize={window.innerWidth > 900 ? 100 : 50}
                            animate={animate}
                            x={-window.innerWidth}
                            animateOptions={[{ duration: 2, x: 0, rotation: 720, delay: 1 }]}
                        />
                    </div>
                    <div className="logo-react">
                        <LogoBox
                            logoImg={reactLogo}
                            logoSize={window.innerWidth > 900 ? 150 : 50}
                            animate={animate}
                            scale={0}
                            animateOptions={[{ duration: 2, rotation: 360, delay: 1, scale: 1 }]}
                        />
                    </div>
                    <div className="logo-angular">
                        <LogoBox
                            logoImg={angularLogo} 
                            logoSize={window.innerWidth > 900 ? 125 : 50}
                            animate={animate}
                            y={window.innerHeight}
                            animateOptions={[{
                                duration: 2,
                                y: 0,
                                delay: 1,
                                ease: "elastic(0.75, 0.3)",
                            }]}
                        />
                    </div>
                </div>
                <div className="fes-list">
                    {Array.from({ length: 5 }, (_, i) => (
                        <div key={i}>
                            <div className="fest-list-subtitle">
                                <ProgressiveText
                                    text={t(`frontend.skills.${i + 1}.t`)}
                                    animate={animate}
                                />
                            </div>
                            <div className="fest-list-description">
                                <ProgressiveText
                                    text={t(`frontend.skills.${i + 1}.d`)}
                                    animate={animate}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FrontendSlide;
